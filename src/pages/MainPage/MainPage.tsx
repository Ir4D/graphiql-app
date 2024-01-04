import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import iconDocs from '../../assets/img/icons_docs.png';
import iconSettings from '../../assets/img/icons_settings.png';
import Query from '../../components/GraphqlEditor/Query';
import { Header } from '../../components/Layout/Header/Header';
import { useLocalization } from '../../utils/localization/localizationContext';
import { useQueryContext } from '../../utils/QueryContext/QueryContext';
import SettingsModal from '../../components/SettingsModal/SettingsModal';
import Prettify from '../../components/Prettifying/Prettyfing';
import InputEditor from '../../components/InputEditor/InputEditor';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [docsPanelOpen, setDocsPanelOpen] = useState(false);
  const [queryInput, setQueryInput] = useState('');
  const [queryResult, setQueryResult] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedApi, setSelectedApi] = useState('');
  const [customApi, setCustomApi] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [variableInput, setVariableInput] = useState('');
  const [headersInput, setHesdersInput] = useState('');
  const { locale, messages } = useLocalization();
  const {
    apiUrl,
    setApiUrl,
    changeApiUrl,
    setQuery,
    changeQuery,
    setVariables,
    setHeaders,
  } = useQueryContext();

  const toggleDocsPanel = () => {
    setDocsPanelOpen((prevDocsPanelOpen) => !prevDocsPanelOpen);
  };

  const handleVariablesChange = (value: string) => {
    setVariableInput(value);
  };

  const handleHeadersChange = (value: string) => {
    setHesdersInput(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQueryInput(() => event.target.value);
  };

  const handleStartClick = async () => {
    await setQuery(queryInput);
    await changeQuery(queryInput);
    await setVariables(variableInput);
    await setHeaders(headersInput);
    setQueryResult(true);
  };

  const handlePrettifyClick = () => {
    const newQueryInput = Prettify(queryInput);
    setQuery(newQueryInput);
    changeQuery(newQueryInput);
    setQueryInput(newQueryInput);
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const submitSettings = async () => {
    if (isCustom) {
      await setApiUrl(customApi);
      await changeApiUrl(customApi);
    } else {
      await setApiUrl(selectedApi);
      await changeApiUrl(selectedApi);
    }
    setShowSettings(false);
  };

  const handleSelectApiChange = async (event: {
    target: { value: string };
  }) => {
    const selectedValue = event.target.value;
    await setSelectedApi(selectedValue);
    await setIsCustom(selectedValue === 'other');
  };

  const handleCustomApiChange = async (event: {
    target: { value: string };
  }) => {
    await setCustomApi(event.target.value);
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
            <img
              src={iconSettings}
              alt="Settings"
              onClick={handleShowSettings}
            />
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
                  placeholder={messages[locale].query_placeholder}
                />
              </div>
              <div className={styles.query_btns}>
                <button onClick={handleStartClick}>Start</button>
                <button onClick={handlePrettifyClick}>Prettify</button>
              </div>
              <div className={styles.query_wrapper}>
                <div className={styles.variables}>
                  <InputEditor
                    value={variableInput}
                    onChange={handleVariablesChange}
                    placeholder={
                      useLocalization().messages[useLocalization().locale]
                        .enter_variables_placeholder
                    }
                    title="variables"
                  />
                </div>
                <div className={styles.headers}>
                  <InputEditor
                    value={headersInput}
                    onChange={handleHeadersChange}
                    placeholder={
                      useLocalization().messages[useLocalization().locale]
                        .enter_headers_placeholder
                    }
                    title="headers"
                  />
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
      <SettingsModal
        active={showSettings}
        onSubmit={submitSettings}
        onClose={closeSettings}
      >
        <div className={styles.settings_current_api}>
          {messages[locale].settings_current}:<span> {apiUrl}</span>
        </div>
        <div className={styles.settings_new_api}>
          <label>
            {messages[locale].settings_choose}:
            <select
              className={styles.settings_select_api}
              value={selectedApi}
              onChange={handleSelectApiChange}
            >
              <option value="https://rickandmortyapi.com/graphql">
                Rick and Morty API
              </option>
              <option value="https://swapi-graphql.netlify.app/.netlify/functions/index">
                Star Wars API
              </option>
              <option value="other">{messages[locale].settings_other}</option>
            </select>
          </label>
          {isCustom && (
            <div className={styles.settings_other_api}>
              {messages[locale].settings_yours}:
              <input
                type="text"
                value={customApi}
                onChange={handleCustomApiChange}
              />
            </div>
          )}
        </div>
      </SettingsModal>
    </>
  );
};

export default MainPage;
