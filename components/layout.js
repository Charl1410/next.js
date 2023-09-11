import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./Nav";
// import Carousel from "./carousel";

const name = "Charlotte";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      
       <titile>WooCommerce App</titile>
       <link rel="stylesheet" href="https://bootswatch.com/5/morph/bootstrap.min.css"></link>

      </Head>
  
  {/* this will either run 2 bits of code, if it is the home first bit. If the other then it runs the other code  */}
      <header className={styles.header}>
        {home ? (
          <>
            <Navbar />
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        
        ) : (
          <>
           <Navbar />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
