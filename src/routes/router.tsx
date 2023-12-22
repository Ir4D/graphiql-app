import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
