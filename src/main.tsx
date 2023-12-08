import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import AppRouter from './routes/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
