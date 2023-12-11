import React from 'react';
import styles from './SlideControls.module.scss';

interface SlideControlsProps {
  isLogin: boolean;
  handleLoginClick: () => void;
  handleSignupClick: () => void;
}

const SlideControls: React.FC<SlideControlsProps> = ({
  isLogin,
  handleLoginClick,
  handleSignupClick,
}) => {
  return (
    <div className={styles.slide_controls}>
      <input
        type="radio"
        name="slider"
        id="login"
        checked={isLogin}
        onChange={handleLoginClick}
      />
      <input
        type="radio"
        name="slider"
        id="signup"
        checked={!isLogin}
        onChange={handleSignupClick}
      />
      <label
        htmlFor="login"
        className={`${styles.slide} ${isLogin ? styles.login : styles.signup}`}
        onClick={handleLoginClick}
      >
        Sign In
      </label>
      <label
        htmlFor="signup"
        className={`${styles.slide} ${isLogin ? styles.signup : styles.login}`}
        onClick={handleSignupClick}
      >
        Sign Up
      </label>
      <div
        className={`${styles.slide_tab} ${
          isLogin ? styles.tab_login : styles.tab_signup
        }`}
      ></div>
    </div>
  );
};

export default SlideControls;
