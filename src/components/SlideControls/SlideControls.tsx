import React from 'react';
import styles from './SlideControls.module.scss';
import { useLocalization } from '../../utils/localization/localizationContext';
import { SlideControlsProps } from '../../models/forms';

const SlideControls: React.FC<SlideControlsProps> = ({
  isLogin,
  handleLoginClick,
  handleSignupClick,
}) => {
  const { locale, messages } = useLocalization();
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
        {messages[locale].Sign_in}
      </label>
      <label
        htmlFor="signup"
        className={`${styles.slide} ${isLogin ? styles.signup : styles.login}`}
        onClick={handleSignupClick}
      >
        {messages[locale].Sign_up}
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
