import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [user] = useAuthState(auth);

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoute;
