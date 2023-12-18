import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import iconDocs from '../../assets/img/icons_docs.png';
import iconSettings from '../../assets/img/icons_settings.png';
import Query from '../../components/GraphqlEditor/Query';
import { Header } from '../../components/Layout/Header/Header';
import { useLocalization } from '../../utils/localization/localizationContext';
import { useQueryContext } from '../../utils/QueryContext/QueryContext';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [docsPanelOpen, setDocsPanelOpen] = useState(false);
  const [queryInput, setQueryInput] = useState('');
  const [queryResult, setQueryResult] = useState(false);
  const { locale, messages } = useLocalization();
  const { setQuery, changeQuery } = useQueryContext();

  const toggleDocsPanel = () => {
    setDocsPanelOpen((prevDocsPanelOpen) => !prevDocsPanelOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQueryInput(() => event.target.value);
  };

  const handleStartClick = async () => {
    await setQuery(queryInput);
    await changeQuery(queryInput);
    setQueryResult(true);
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
            <h3 className={styles.docs_title}>{messages[locale].docs_title}</h3>
            <p>Documentation...</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              sunt corrupti minima laudantium eveniet modi!
            </p>
          </div>
          <div className={styles.editor_wrapper}>
            <div className={styles.query}>
              <div className={styles.query_field}>
                <h3 className={styles.query_title}>
                  {messages[locale].query_title}
                </h3>
                <textarea
                  className={styles.query_text}
                  value={queryInput}
                  onChange={handleInputChange}
                  placeholder="Enter your GraphQL query here"
                />
              </div>
              <div>
                <button onClick={handleStartClick}>Start</button>
              </div>
              <div className={styles.query_wrapper}>
                <div className={styles.variables}>
                  <h4>{messages[locale].variables}</h4>
                </div>
                <div className={styles.headers}>
                  <h4>{messages[locale].headers}</h4>
                </div>
              </div>
            </div>
            <div className={styles.viewer}>
              <h3 className={styles.viewer_title}>
                {messages[locale].viewer_title}
              </h3>
              {queryResult && <Query />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
