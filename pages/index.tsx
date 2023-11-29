import React from 'react';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';

interface Props {
  children: React.ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>React</title>
        <meta name="description" content="React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <Provider store={setupStore}>
          <div>{children}</div>
        </Provider>
      </ErrorBoundary>
    </>
  );
};

export default Index;
