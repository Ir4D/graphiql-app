import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import graphqlLogo from '../../assets/img/graphql_logo.png';
import avatarMale from '../../assets/img/avatar_male.png';
import avatarFemale1 from '../../assets/img/avatar_female1.png';
import avatarFemale2 from '../../assets/img/avatar_female2.png';
import { Header } from '../../components/Layout/Header/Header';
import { useLocalization } from '../../utils/localization/localizationContext';
function WelcomePage() {
  const isAuthenticated = false;
  const { locale, messages } = useLocalization();

  return (
    <>
      <Header />
      <div className={styles.welcome_page}>
        <section className={styles.welcome_wrapper}>
          <div className={styles.left_side}>
            <h1 className={styles.heading}>
              {messages[locale].welcome_heading}
            </h1>
            <div className={styles.description}>
              <p>{messages[locale].welcome_description}</p>
              <div className={styles.links_wrapper}>
                {isAuthenticated ? (
                  <div>
                    <button className={styles.btn}>
                      <Link to="/main">{messages[locale].start_btn}</Link>
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>{messages[locale].create_description}</p>
                    <button className={styles.btn}>
                      <Link to="/auth">
                        {messages[locale].Sign_in} / {messages[locale].Sign_up}
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.right_side}>
            <img src={graphqlLogo} alt="graphql logo" />
          </div>
        </section>
        <section className={styles.course_wrapper}>
          <h3 className={styles.heading}>{messages[locale].about_course}</h3>
          <div className={styles.text}>
            <p>
              <a className={styles.link} href="https://rs.school/react/">
                {messages[locale].RSS_course}
              </a>{' '}
              {messages[locale].course_description_1}
            </p>
            <p>{messages[locale].course_description_2}</p>
          </div>
        </section>
        <section className={styles.team_wrapper}>
          <h3 className={styles.heading}>{messages[locale].team}</h3>
          <div className={styles.developers}>
            <div className={styles.developer}>
              <img src={avatarFemale1} alt="avatar" />
              <div className={styles.info}>
                <p className={styles.name}>
                  <a href="https://github.com/Ir4D">
                    {messages[locale].Irina} <br />
                    {messages[locale].Dedova}
                  </a>
                </p>
                <p className={styles.role}>{messages[locale].team_lead}</p>
                <p className={styles.contribution}>Welcome page, Main page</p>
              </div>
            </div>
            <div className={styles.developer}>
              <img src={avatarFemale2} alt="avatar" />
              <div className={styles.info}>
                <p className={styles.name}>
                  <a href="https://github.com/Yuliya0503">
                    {messages[locale].Yuliya} <br />
                    {messages[locale].Narkevich}
                  </a>
                </p>
                <p className={styles.role}>{messages[locale].team_member}</p>
                <p className={styles.contribution}>
                  Sign in/ sign up page, routing, 404 page
                </p>
              </div>
            </div>
            <div className={styles.developer}>
              <img src={avatarMale} alt="avatar" />
              <div className={styles.info}>
                <p className={styles.name}>
                  <a href="https://github.com/DragonRomeo">
                    {messages[locale].Ilya} <br />
                    {messages[locale].Romanov}
                  </a>
                </p>
                <p className={styles.role}>{messages[locale].team_member}</p>
                <p className={styles.contribution}>
                  Header & footer, authentication
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WelcomePage;
