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

const AppRouter = () => {
  /* Чтобы посмотреть страницу авторизации, измени значение на false;
  или закомментируй код и используй раскомментируй вот этот:*/

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<WelcomePage />} />
  //       <Route path="/auth" element={<AuthPage />} />
  //       <Route path="/main" element={<MainPage />} />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </Router>
  // );

  // Здесь логика проверки авторизации
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* Приветственная страница */}
        <Route path="/" element={<WelcomePage />} />

        {/* Страница авторизации */}
        <Route
          path="/auth"
          element={isAuthenticated ? <Navigate to="/main" /> : <AuthPage />}
        />

        {/* Главная страница (требует авторизации) */}
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/auth" />}
        />

        {/* Страница 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
