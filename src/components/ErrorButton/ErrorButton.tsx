import React from 'react';
import './ErrorButton.css';

class ErrorButton extends React.Component {
  state = {
    error: false,
  };
  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }
    return (
      <button className="crash__button" onClick={() => this.setState({ error: true })}>
        Crash
      </button>
    );
  }
}

export default ErrorButton;
