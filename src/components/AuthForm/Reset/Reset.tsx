import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../../utils/firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from './Reset.module.scss';

export const Reset = () => {
  const [email, setEmail] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);
  return (
    <div className={styles.reset}>
      <div className={styles.reset__container}>
        <input
          type="text"
          className={styles.reset__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className={styles.reset__btn}
          onClick={() => sendPasswordResetEmail(auth, email)}
        >
          Send password reset email
        </button>
        <div>
          Don`&apos;`t have an account? <Link to="/register">Register</Link>{' '}
          now.
        </div>
      </div>
    </div>
  );
};
