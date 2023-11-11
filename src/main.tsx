import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
