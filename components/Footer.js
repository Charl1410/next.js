import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* about section one of 3*/}
      
            <section className={styles.section}>
            <h5>Read about us</h5>
            <ul className={styles.ul}>
                <li>urna</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
            </ul>
            </section>
            <section className={styles.section}>
            <h5>Contact Us</h5>
            <ul className={styles.ul}>
                <li>urna</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
            </ul>
            </section>
            <section className={styles.section}>
            <h5>Returns</h5>
            <ul className={styles.ul}>
                <li>urna</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
                <li>ornare</li>
            </ul>
            </section>
    </footer>
  );
}

export default Footer