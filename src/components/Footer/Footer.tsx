import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.authors_container}>
        <a href="https://github.com/Ir4D">Irina D.</a>
        <a href="https://github.com/Yuliya0503">Yuliya_Narkevich</a>
        <a href="https://github.com/DragonRomeo">Ilya Romanov</a>
      </div>
    </footer>
  );
};
