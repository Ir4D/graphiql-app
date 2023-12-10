import styles from './WelcomePage.module.scss';

function WelcomePage() {
  return (
    <div className={styles.welcome_page}>
      <div className={styles.welcome_heading}>
        <h1>Welcome to GraphiQL</h1>
        <h3>GraphiQL is a playground/IDE for graphQL requests</h3>
      </div>
      <div className={styles.links_wrapper}>
        <div>
          <p>Create your account or sign in here:</p>
          <button className={styles.btn}>
            <a href="#">Sign in/ Sign up</a>
          </button>
        </div>
        <div>
          <p>Start making your requests now:</p>
          <button className={styles.btn}>
            <a href="#">Let&apos;s go!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
