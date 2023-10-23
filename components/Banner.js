import React from 'react'
import styles from '../styles/banner.module.css'

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{props.pageName}</h1>
    </div>
  );
}

export default Banner