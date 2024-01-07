import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import LoadingComponent from '../components/loading/Loading';

const AuthPage = React.lazy(() => import('../pages/AuthPage/AuthPage'));
const MainPage = React.lazy(() => import('../pages/MainPage/MainPage'));

interface AuthSuspenseProps {
  children: ReactNode;
}

const AuthSuspense = ({ children }: AuthSuspenseProps) => {
  return <>{children}</>;
};

const AppRouter = () => {
  const [isAuthLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      setTimeout(() => {
        setAuthLoaded(true);
      }, 3500);
    };

    checkAuth();
  }, []);

  if (!isAuthLoaded) {
    return <LoadingComponent />;
  }

  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
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
                    <MainPage />
                  </PrivateRoute>
                </AuthSuspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
