import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import graphqlLogo from '../../assets/img/graphql_logo.png';
import avatarMale from '../../assets/img/avatar_male.png';
import avatarFemale1 from '../../assets/img/avatar_female1.png';
import avatarFemale2 from '../../assets/img/avatar_female2.png';
import { Header } from '../../components/Layout/Header/Header';

function WelcomePage() {
  const isAuthenticated = false;

  return (
    <>
      <Header />
      <div className={styles.welcome_page}>
        <section className={styles.welcome_wrapper}>
          <div className={styles.left_side}>
            <h1 className={styles.heading}>Welcome to GraphiQL</h1>
            <div className={styles.description}>
              <p>
                GraphiQL is an in-browser IDE for writing, validating, and
                testing GraphQL queries.
              </p>
              <div className={styles.links_wrapper}>
                {isAuthenticated ? (
                  <div>
                    <button className={styles.btn}>
                      <Link to="/main">Let&apos;s start!</Link>
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>Create your account or sign in here:</p>
                    <button className={styles.btn}>
                      <Link to="/auth">Sign in/ Sign up</Link>
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
          <h3 className={styles.heading}>About the course</h3>
          <div className={styles.text}>
            <p>
              <a className={styles.link} href="https://rs.school/react/">
                RS School React Course
              </a>{' '}
              is a crash course through the most important React topics, such as
              React Router, redux, hooks, context and others.
            </p>
            <p>
              RS School is free-of-charge and community-based education program
              conducted by The Rolling Scopes developer community since 2013.
            </p>
          </div>
        </section>
        <section className={styles.team_wrapper}>
          <h3 className={styles.heading}>Our team</h3>
          <div className={styles.developers}>
            <div className={styles.developer}>
              <img src={avatarFemale1} alt="avatar" />
              <div className={styles.info}>
                <p className={styles.name}>
                  <a href="https://github.com/Ir4D">
                    Irina <br />
                    Dedova
                  </a>
                </p>
                <p className={styles.role}>Team lead</p>
                <p className={styles.contribution}>Welcome page, Main page</p>
              </div>
            </div>
            <div className={styles.developer}>
              <img src={avatarFemale2} alt="avatar" />
              <div className={styles.info}>
                <p className={styles.name}>
                  <a href="https://github.com/Yuliya0503">
                    Yuliya <br />
                    Narkevich
                  </a>
                </p>
                <p className={styles.role}>Team member</p>
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
                    Ilya <br />
                    Romanov
                  </a>
                </p>
                <p className={styles.role}>Team member</p>
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
