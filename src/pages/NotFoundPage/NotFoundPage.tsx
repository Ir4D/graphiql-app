import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function NotFoundPage() {
  return (
    <main className={styles.not_found_container}>
      <div className={styles.content}>
        <h2 className={styles.not_found_title}>404</h2>
        <h2 className={styles.not_found_message}>Oops</h2>
        <Link to="/" className={styles.not_found_link}>
          Go to home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
