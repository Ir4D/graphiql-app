import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.main_page}>
      <aside className={styles.main_menu}>
        <p>Menu</p>
        <button className={styles.menu_documentation}>Doc</button>
        <button className={styles.menu_settings}>Set</button>
      </aside>
      <section className={styles.main_content}>
        <div className={styles.main_documentation}>
          <p>Docs</p>
        </div>
        <div className={styles.main_editor}>
          <div className={styles.main_query}>
            <p>Query editor section</p>
          </div>
          <div className={styles.main_viewer}>
            <p>JSON viewer section</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
