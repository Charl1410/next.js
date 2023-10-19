import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.iconContainer}>
        <ul className={styles.footerIcons}>
          <li className="icon-styling">
            <a href="https://www.github.com/Charl1410">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub Icon"
                className={styles.icon}
              />
            </a>
          </li>
          <li className="icon-styling">
            <a href="https://www.facebook.com/charlotte.griffin.39">
              <img
                src="https://cdn-icons-png.flaticon.com/512/44/44646.png"
                alt="GitHub Icon"
                className={styles.icon}
              />
            </a>
          </li>
          <li className="icon-styling">
            <a href="https://www.twitter.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
                alt="Twitter Icon"
                className={styles.icon}
              />
            </a>
          </li>
        </ul>
      </div>
      {/* about section one of 3*/}

      <div className={styles.links}>
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
      </div>
    </footer>
  );
}

export default Footer