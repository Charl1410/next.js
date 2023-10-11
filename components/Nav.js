import Link from "next/link";
import styles from '../styles/nav.module.css'

  // components/Navbar.js
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <i className="material-icons">home</i>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products">Products</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
        ></input>
        <i className="material-icons">search</i>
      </div>
      <Link href="/cart">
        <i className="material-icons">shopping_cart</i>
      </Link>
    </div>
  );
};

export default Navbar;

