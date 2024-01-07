import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingComponent from '../components/loading/Loading';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [user, loading] = useAuthState(auth);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await auth.currentUser;
        setAuthChecked(true);
      } catch {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      if (!user) {
        navigate('/', { replace: true });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  if (!authChecked || loading) {
    return <LoadingComponent />;
  }

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoute;
