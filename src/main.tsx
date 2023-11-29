import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App';
import './index.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore}>
    <React.StrictMode>
      <WrappedApp />
    </React.StrictMode>
  </Provider>
);
