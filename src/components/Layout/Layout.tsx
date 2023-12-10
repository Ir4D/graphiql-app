import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
