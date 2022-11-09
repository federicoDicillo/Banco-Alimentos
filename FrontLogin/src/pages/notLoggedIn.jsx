import React from 'react';
import Background from '../assets/rectangleColor.png';
import styles from '../styles/notLoggedIn.module.css';

const NotLoggedIn = () => {
  return (
    <div>
      <img src={Background} alt="" className={styles.backgroundNotLoggedIn} />
      <h1 className={styles.message}>No has iniciado sesion</h1>
    </div>
  );
};

export default NotLoggedIn;
