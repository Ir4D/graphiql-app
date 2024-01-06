import styles from './Footer.module.scss';
import { useLocalization } from '../../../utils/localization/localizationContext';

export const Footer = () => {
  const { locale, messages } = useLocalization();
  return (
    <footer className={styles.footer}>
      <div className={styles.authors_container}>
        <a href="https://github.com/Ir4D">
          {messages[locale].Irina}_{messages[locale].Dedova}
        </a>
        <a href="https://github.com/Yuliya0503">
          {messages[locale].Yuliya}_{messages[locale].Narkevich}
        </a>
        <a href="https://github.com/DragonRomeo">
          {messages[locale].Ilya}_{messages[locale].Romanov}
        </a>
      </div>

      <div className={styles.data_container}>
        <span>2024</span>
      </div>

      <div className={styles.rss_container}>
        <a href="https://rs.school/react/">
          <div className={styles.rss_school_img}></div>
        </a>
      </div>
    </footer>
  );
};
