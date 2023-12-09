import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <span>Welcome page link</span>
      <span>Language switch</span>
      <button className={styles.button}>Sign out</button>
    </div>
  );
};
