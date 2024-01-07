import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { useLocalization } from '../../../utils/localization/localizationContext';
import { Dashboard } from '../../AuthForm/Dashboard/Dashboard';
import { auth } from '../../../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuth } from '../../../utils/Auth/AuthContext';

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { locale, messages, changeLocale } = useLocalization();
  /* User - по нему определяется залогинен ли пользователь */
  const [user] = useAuthState(auth);
  const { setLoginStatus } = useAuth();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  }, []);

  const headerClassName = isSticky
    ? `${styles.header} ${styles.sticky}`
    : styles.header;

  return (
    <header className={headerClassName}>
      <div className={styles.container}>
        <nav>
          <NavLink className={styles.link} to="/">
            {messages[locale].header_navigate}
          </NavLink>
        </nav>

        <div className={styles.language_container}>
          <button
            className={styles.language_item}
            onClick={() => changeLocale('en')}
          >
            EN
          </button>
          <span>/</span>
          <button
            className={styles.language_item}
            onClick={() => changeLocale('ru')}
          >
            RU
          </button>
        </div>

        <div className={styles.sign_container}>
          {user ? (
            <Dashboard />
          ) : (
            <>
              <button
                className={styles.button}
                onClick={() => setLoginStatus(true)}
              >
                <Link to="/auth">{messages[locale].Sign_in}</Link>
              </button>
              <button
                className={styles.button}
                onClick={() => setLoginStatus(false)}
              >
                <Link to="/auth">{messages[locale].Sign_up}</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
