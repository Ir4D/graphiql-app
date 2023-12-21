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

  return (
    <AuthContext.Provider
      value={{ isLogin, toggleLoginStatus, setLoginStatus: setIsLogin }}
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

  const { isLogin, toggleLoginStatus, setLoginStatus } = context;

  return { isLogin, toggleLoginStatus, setLoginStatus };
};
