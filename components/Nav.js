import Link from "next/link";
import styles from '../styles/nav.module.css'

const Navbar = () => {
  return (
    <nav class={styles.navbar}>
      <ul class={styles.navlist}>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/our-work">Our Work</Link>
        </li>
        <li>
          <Link href="/training">Training</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/get-in-touch">Get in Touch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
