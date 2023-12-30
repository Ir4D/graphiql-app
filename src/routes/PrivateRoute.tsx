import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = () => {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
