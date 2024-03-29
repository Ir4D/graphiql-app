import styles from './Footer.module.scss';
import { useLocalization } from '../../../utils/localization/localizationContext';
import logoGithub from '../../../assets/img/icons_github.png';

export const Footer = () => {
  const { locale, messages } = useLocalization();
  return (
    <footer className={styles.footer}>
      <div className={styles.authors_container}>
        <a href="https://github.com/Ir4D">
          <img src={logoGithub} alt="github logo" />
          {messages[locale].Irina}_{messages[locale].Dedova}
        </a>
        <a href="https://github.com/Yuliya0503">
          <img src={logoGithub} alt="github logo" />
          {messages[locale].Yuliya}_{messages[locale].Narkevich}
        </a>
        <a href="https://github.com/DragonRomeo">
          <img src={logoGithub} alt="github logo" />
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
