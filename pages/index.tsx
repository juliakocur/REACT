import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';

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
      <Provider store={setupStore}>
        <div>{children}</div>
      </Provider>
    </>
  );
};

export default Index;
