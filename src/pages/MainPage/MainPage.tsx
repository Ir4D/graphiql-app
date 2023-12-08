import styles from './MainPage.module.scss';
import iconDocs from '../../assets/img/icons_docs3.png';
import iconSettings from '../../assets/img/icons_settings3.png';

const MainPage = () => {
  return (
    <main className={styles.main_page}>
      <aside className={styles.menu_wrapper}>
        <button className={styles.menu_docs}>
          <img src={iconDocs} alt="Docs" />
        </button>
        <button className={styles.menu_settings}>
          <img src={iconSettings} alt="Settings" />
        </button>
      </aside>
      <section className={styles.content}>
        <div className={styles.docs}>
          <p>Docs</p>
        </div>
        <div className={styles.editor_wrapper}>
          <div className={styles.query}>
            <p>Query editor section</p>
          </div>
          <div className={styles.viewer}>
            <p>JSON viewer section</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
