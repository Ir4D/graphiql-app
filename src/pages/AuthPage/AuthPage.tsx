import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Header } from '../../components/Layout/Header/Header';
import { FirebaseContext } from '../../utils/firebase/FirebaseContext';
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
          <FirebaseContext.Provider value={{ isLogin }}>
            <AuthForm
              isLogin={isLogin}
              handleLoginClick={handleLoginClick}
              handleSignupClick={handleSignupClick}
              handleSignupLinkClick={handleSignupLinkClick}
            />
          </FirebaseContext.Provider>
        </div>
      </main>
    </>
  );
}

export default AuthPage;
