import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.authors_container}>
        <a href="https://github.com/Ir4D">Irina Dedova</a>
        <a href="https://github.com/Yuliya0503">Yuliya_Narkevich</a>
        <a href="https://github.com/DragonRomeo">Ilya Romanov</a>
      </div>

      <div className={styles.data_container}>
        <span>2024</span>
      </div>

      {/* Если такая реализация линка на курс не подойдет, то можно заморочиться с SVG */}

      <div className={styles.rss_container}>
        <a href="https://rs.school/react/">
          <div className={styles.rss_school_img}></div>
        </a>
      </div>
    </footer>
  );
};
