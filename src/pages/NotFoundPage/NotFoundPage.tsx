import React from 'react';
import styles from './NotFound.module.scss';
import { Header } from '../../components/Layout/Header/Header';

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className={styles.not_found_container}>
        <div className={styles.content}>
          <h2 className={styles.not_found_title}>404</h2>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
