import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  /*isLogin будет пропсой, которая приходит откуда-то выше */
  const isLogin = false;
  return (
    <header className={styles.header}>
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
