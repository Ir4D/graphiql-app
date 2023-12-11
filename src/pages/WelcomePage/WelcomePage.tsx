import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import graphqlLogo from '../../assets/img/graphql_logo.png';

function WelcomePage() {
  const isAuthenticated = false;

  return (
    <div className={styles.welcome_page}>
      <section className={styles.welcome_wrapper}>
        <div className={styles.left_side}>
          <h1 className={styles.heading}>Welcome to GraphiQL</h1>
          <div className={styles.description}>
            <p>
              GraphiQL is an in-browser IDE for writing, validating, and testing
              GraphQL queries.
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
        <div className={styles.course}>
          <h3>About the course</h3>
          <p>
            RS School React Course is a crash course through the most important
            React topics, such as React Router, redux, hooks, context and
            others.
          </p>
          <p>
            RS School is free-of-charge and community-based education program
            conducted by The Rolling Scopes developer community since 2013.
          </p>
        </div>
      </section>
      <section className={styles.developers}>
        <h3>Our team</h3>
        <div>
          <div>Irina Dedova</div>
          <div>Yuliya Narkevich</div>
          <div>Ilya Romanov</div>
        </div>
      </section>
    </div>
  );
}

export default WelcomePage;
