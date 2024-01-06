import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import graphqlLogo from '../../assets/img/graphql_logo.png';
import avatarMale from '../../assets/img/avatar_male.png';
import avatarFemale1 from '../../assets/img/avatar_female1.png';
import avatarFemale2 from '../../assets/img/avatar_female2.png';
import { Header } from '../../components/Layout/Header/Header';
import { useLocalization } from '../../utils/localization/localizationContext';
import { auth } from '../../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Developer from '../../components/Developer/Developer';

function WelcomePage() {
  const { locale, messages } = useLocalization();
  const [user] = useAuthState(auth);
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
                {user ? (
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
            <Developer
              avatar={avatarFemale1}
              firstName={messages[locale].Irina}
              lastName={messages[locale].Dedova}
              github="https://github.com/Ir4D"
              role={messages[locale].team_lead}
              contribution="Welcome page, Main page"
            />
            <Developer
              avatar={avatarFemale2}
              firstName={messages[locale].Yuliya}
              lastName={messages[locale].Narkevich}
              github="https://github.com/Yuliya0503"
              role={messages[locale].team_member}
              contribution="Sign in/ sign up page, routing, 404 page"
            />
            <Developer
              avatar={avatarMale}
              firstName={messages[locale].Ilya}
              lastName={messages[locale].Romanov}
              github="https://github.com/DragonRomeo"
              role={messages[locale].team_member}
              contribution=" Header & footer, authentication"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default WelcomePage;
