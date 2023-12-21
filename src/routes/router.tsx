import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';
import { auth } from '../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Приветственная страница */}
          <Route path="/" element={<WelcomePage />} />

          {/* Страница авторизации */}
          <Route
            path="/auth"
            element={user ? <Navigate to="/main" /> : <AuthPage />}
          />

          {/* Главная страница (требует авторизации) */}
          <Route
            path="/main"
            element={user ? <MainPage /> : <Navigate to="/auth" />}
          />

          {/* Страница 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
