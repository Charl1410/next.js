import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import styles from '../styles/home.module.css'
import Link from "next/link";



export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.bannerContainer}>
        {/* <p>This is the homepage</p> */}
        <Image
          src="/images/homeBanner.jpg"
          alt="My Image"
          width={1300} // Set the desired width
          height={200} // Set the desired height
          className={styles.banner}
        />
        <div className={styles.centeredButton}>
          <button className={styles.shopButton}>
            <Link href='/products'>Shop our range</Link>
          </button>
        </div>
      </div>

      <section className={utilStyles.headingMd}></section>
    </Layout>
  );
}
