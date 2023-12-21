import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextType {
  isLogin: boolean;
  toggleLoginStatus: () => void;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginStatus = () => {
    setIsLogin((prev) => !prev);
  };

  const setLoginStatus: React.Dispatch<React.SetStateAction<boolean>> = (
    status
  ) => {
    setIsLogin(status);
  };

  return (
    <AuthContext.Provider
      value={{ isLogin, toggleLoginStatus, setLoginStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { isLogin, toggleLoginStatus } = context;
  const setLoginStatus = context.setLoginStatus!;

  return { isLogin, toggleLoginStatus, setLoginStatus };
};
