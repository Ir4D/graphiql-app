import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
