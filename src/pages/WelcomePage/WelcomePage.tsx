import styles from './WelcomePage.module.scss';

function WelcomePage() {
  return (
    <div className={styles.welcome_page}>
      <div className={styles.heading}>
        <h1>Welcome to GraphiQL</h1>
        <h3>GraphiQL is a playground/IDE for graphQL requests</h3>
      </div>
      <div className={styles.links}>
        <div>
          <p>Create your account of sign in here:</p>
          <button>Sign in/ Sign up</button>
        </div>
        <div>
          <p>Start making your requests now:</p>
          <button>Let&apos;s go!</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
