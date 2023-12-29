import React, { ReactNode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

interface AuthSuspenseProps {
  children: ReactNode;
}

const AuthSuspense = ({ children }: AuthSuspenseProps) => {
  return (
    <Suspense fallback={<div>Loading authentication...</div>}>
      {children}
    </Suspense>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/auth"
            element={
              <AuthSuspense>
                <AuthPage />
              </AuthSuspense>
            }
          />
          <Route
            path="/main"
            element={
              <AuthSuspense>
                <PrivateRoute>
                  <Suspense fallback={<div>Loading main page...</div>}>
                    <MainPage />
                  </Suspense>
                </PrivateRoute>
              </AuthSuspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
