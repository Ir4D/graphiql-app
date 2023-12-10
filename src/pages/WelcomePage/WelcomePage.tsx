import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';

function WelcomePage() {
  const isAuthenticated = true;

  return (
    <div className={styles.welcome_page}>
      <div className={styles.welcome_heading}>
        <h1>Welcome to GraphiQL</h1>
        <h3>GraphiQL is a playground/IDE for graphQL requests</h3>
      </div>
      <div className={styles.links_wrapper}>
        {isAuthenticated ? (
          <div>
            <p>Start making your requests now:</p>
            <button className={styles.btn}>
              <Link to="/main">Let&apos;s go!</Link>
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
  );
}

export default WelcomePage;
