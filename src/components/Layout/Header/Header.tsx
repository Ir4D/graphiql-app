import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
  /*isLogin будет пропсой, которая приходит откуда-то выше */
  const isLogin = false;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let timeout;
    let scroll = 0;

    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        /*scroll >= window.scrollY && */
        if (window.scrollY > 10) {
          console.log(`scroll =${scroll}, window.scroll=${window.scrollY}`);
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);
  const headerClassName = isSticky
    ? `${styles.header} ${styles.sticky}`
    : styles.header;
  console.log(headerClassName);
  console.log(isSticky);

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
              <button className={styles.button}>Sign in</button>
              <button className={styles.button}>Sign up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
