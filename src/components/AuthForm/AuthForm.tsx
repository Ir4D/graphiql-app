import React from 'react';
import styles from './AuthForm.module.scss';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import SlideControls from '../SlideControls/SlideControls';
// import { useFirebaseContext } from '../../utils/firebase/FirebaseContext';

interface AuthFormProps {
  isLogin: boolean;
  handleLoginClick: () => void;
  handleSignupClick: () => void;
  handleSignupLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  handleLoginClick,
  handleSignupClick,
  handleSignupLinkClick,
}) => {
  // const isLogin2 = ({ isLogin } = useFirebaseContext());

  return (
    <div className={styles.form_container}>
      <SlideControls
        isLogin={isLogin}
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />
      <div className={styles.form_inner}>
        {isLogin ? (
          <LoginForm onClick={handleSignupLinkClick} />
        ) : (
          <SignupForm />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
