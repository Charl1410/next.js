import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./Nav";
import Footer from "./Footer";

const name = "Charlotte";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <titile>WooCommerce App</titile> */}
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/morph/bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <></>
        )}
      </header>
    
          {!home && (
        <>
        <Navbar />
          <div className={styles.backToHome}>
            {children}
            <Link href="/">← Back to home</Link>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
