import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingComponent from '../components/loading/Loading';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [user, loading] = useAuthState(auth);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading]);

  if (!authChecked) {
    return <LoadingComponent />;
  }

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoute;
