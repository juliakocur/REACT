import React from 'react';
import { IProps as Props } from '../Types/index';
import { IState as State } from '../Types/index';

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Catched error: ', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: 'red', padding: '30px 50px' }}>Oops... Something went wrong.</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
