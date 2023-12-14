import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import AppRouter from './routes/router.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>
);
