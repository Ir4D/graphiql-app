import React from 'react';
import styles from './Loading.module.scss';

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles.loading_wrapper}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingComponent;
