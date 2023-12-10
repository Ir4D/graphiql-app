import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <span>Welcome page link</span>

      <div className={styles.language_container}>
        <button className={styles.language_item}>EN</button>
        <span>/</span>
        <button className={styles.language_item}>LP</button>
      </div>

      <button className={styles.button}>Sign out</button>
    </div>
  );
};
