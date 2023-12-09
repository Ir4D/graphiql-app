import React from 'react';
import styles from './AuthForm.module.scss';

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
  return (
    <div className={styles.form_container}>
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
          className={`${styles.slide} ${
            isLogin ? styles.login : styles.signup
          }`}
          onClick={handleLoginClick}
        >
          Login
        </label>
        <label
          htmlFor="signup"
          className={`${styles.slide} ${
            isLogin ? styles.signup : styles.login
          }`}
          onClick={handleSignupClick}
        >
          Signup
        </label>
        <div
          className={`${styles.slide_tab} ${
            isLogin ? styles.tab_login : styles.tab_signup
          }`}
        ></div>
      </div>
      <div className={styles.form_inner}>
        {isLogin ? (
          <form className={`${styles.form} ${styles.login}`} action="#">
            <div className={styles.field}>
              <input type="text" placeholder="Email Address" />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Password" />
            </div>
            <div className={styles.pass_link}>
              <a href="#">Forgot password?</a>
            </div>
            <div className={styles.field}>
              <input type="submit" value="Login" />
            </div>
            <div className={styles.signup_link}>
              Not a member?{' '}
              <a href="#" onClick={handleSignupLinkClick}>
                Signup now
              </a>
            </div>
          </form>
        ) : (
          <form className={`${styles.form} ${styles.signup}`} action="#">
            <div className={styles.field}>
              <input type="text" placeholder="Email Address" />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Password" />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Confirm password" />
            </div>
            <div className={styles.field}>
              <input type="submit" value="Signup" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
