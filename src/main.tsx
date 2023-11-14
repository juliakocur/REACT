import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore}>
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
