import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
  /*isLogin будет пропсой, которая приходит откуда-то выше */
  const isLogin = false;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        console.log(`window.scroll=${window.scrollY}`);
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
            To welcome page
          </NavLink>
        </nav>

        <div className={styles.language_container}>
          <button className={styles.language_item}>EN</button>
          <span>/</span>
          <button className={styles.language_item}>LP</button>
        </div>

        <div className={styles.sign_container}>
          {isLogin ? (
            <button className={styles.button}>Sign out</button>
          ) : (
            <>
              <button className={styles.button}>
                <Link to="/auth">Sign in</Link>
              </button>
              <button className={styles.button}>
                <Link to="/auth">Sign up</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
