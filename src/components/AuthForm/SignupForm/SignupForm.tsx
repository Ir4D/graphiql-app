import React from 'react';
import styles from '../AuthForm.module.scss';

const SignupForm: React.FC = () => {
  return (
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
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  );
};

export default SignupForm;
