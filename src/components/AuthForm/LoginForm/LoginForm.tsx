import React from 'react';
import styles from '../AuthForm.module.scss';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  return (
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
        <input type="submit" value="Sign In" />
      </div>
      <div className={styles.signup_link}>
        Not a member?{' '}
        <a href="#" onClick={onClick}>
          Sign Up now
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
