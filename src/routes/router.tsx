import React, { ReactNode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import LoadingComponent from '../components/loading/Loading';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

interface AuthSuspenseProps {
  children: ReactNode;
}

const AuthSuspense = ({ children }: AuthSuspenseProps) => {
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
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
                  <AuthSuspense>
                    <MainPage />
                  </AuthSuspense>
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
