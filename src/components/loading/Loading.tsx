import React from 'react';
import styles from './Loading.module.scss';
import graphqlLogo from '../../assets/img/graphql_logo.png';

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles.img_loading_conatiner}>
      <img
        className={styles.img_loading}
        src={graphqlLogo}
        alt="graphql logo"
      />
    </div>
  );
};

export default LoadingComponent;
