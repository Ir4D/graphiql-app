import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import iconDocs from '../../assets/img/icons_docs.png';
import iconSettings from '../../assets/img/icons_settings.png';
import Query from '../../components/Graphql/Query';
import { Header } from '../../components/Layout/Header/Header';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [docsPanelOpen, setDocsPanelOpen] = useState(false);

  const toggleDocsPanel = () => {
    setDocsPanelOpen((prevDocsPanelOpen) => !prevDocsPanelOpen);
  };

  return (
    <>
      <Header />
      <main className={styles.main_page}>
        <aside className={styles.menu_wrapper}>
          <button className={styles.menu_docs} onClick={toggleDocsPanel}>
            <img src={iconDocs} alt="Docs" />
          </button>
          <button className={styles.menu_settings}>
            <img src={iconSettings} alt="Settings" />
          </button>
        </aside>
        <section className={styles.content_wrapper}>
          <div
            className={`${styles.docs} ${docsPanelOpen ? styles.active : ''}`}
          >
            <h3 className={styles.docs_title}>Docs</h3>
            <p>Documentation...</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              sunt corrupti minima laudantium eveniet modi!
            </p>
          </div>
          <div className={styles.editor_wrapper}>
            <div className={styles.query}>
              <div className={styles.query_field}>
                <h3 className={styles.query_title}>Query editor section</h3>
              </div>
              <div className={styles.query_wrapper}>
                <div className={styles.variables}>
                  <h4>Variables</h4>
                </div>
                <div className={styles.headers}>
                  <h4>Headers</h4>
                </div>
              </div>
            </div>
            <div className={styles.viewer}>
              <h3 className={styles.viewer_title}>JSON viewer section</h3>
              {/* {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>} */}
              <Query />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
