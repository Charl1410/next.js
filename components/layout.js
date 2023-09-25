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
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            {/* This is the data that shows only if the homepage = true */}
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
          </>
        )}
      </header>
      {/* this children element passes the data from each page into children as a prop
      have to wrap those pages in the Layout wrapper first */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
          <Footer />
        </div>
      )}
    </div>
  );
}
