import React from 'react';
import Door404 from '../assets/door 404.png';
import styles from '../styles/404.module.css';

const NotFound = () => {
  return (
    <div className="container">
      <h2 className={styles.h2NotFound}>Pagina no Encontrada</h2>
      <img src={Door404} alt="" className={styles.door404} />
      <h4 className={styles.message}>Ups, la pagina no ha sido encontrada</h4>
    </div>
  );
};

export default NotFound;
