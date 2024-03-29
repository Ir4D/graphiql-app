import styles from './AuthPage.module.scss';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Header } from '../../components/Layout/Header/Header';
import { useAuth } from '../../utils/Auth/AuthContext';

function AuthPage() {
  const { isLogin, toggleLoginStatus } = useAuth();

  const handleLoginClick = () => {
    toggleLoginStatus();
  };

  const handleSignupClick = () => {
    toggleLoginStatus();
  };

  const handleSignupLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleSignupClick();
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <AuthForm
            isLogin={isLogin}
            handleLoginClick={handleLoginClick}
            handleSignupClick={handleSignupClick}
            handleSignupLinkClick={handleSignupLinkClick}
          />
        </div>
      </main>
    </>
  );
}

export default AuthPage;
