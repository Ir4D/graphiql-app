import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Header } from '../../components/Layout/Header/Header';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleSignupLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleSignupClick();
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <AuthForm
            isLogin={isLogin}
            handleLoginClick={handleLoginClick}
            handleSignupClick={handleSignupClick}
            handleSignupLinkClick={handleSignupLinkClick}
          />
        </div>
      </main>
    </>
  );
}

export default AuthPage;
