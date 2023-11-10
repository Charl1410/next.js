import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import styles from '../styles/home.module.css'
import Link from "next/link";
import Button from '../components/Button'

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.bannerContainer}>
        {/* <p>This is the homepage</p> */}
        <h1 className={styles.header}>vestibulum</h1>
        <Image
          src="/images/homeBanner.jpg"
          alt="My Image"
          width={1300} // Set the desired width
          height={200} // Set the desired height
          className={styles.banner}
        />
        <div className={styles.centeredButton}>
          <Button buttonName={"Shop the range"}>
            <Link href="/products"></Link>
          </Button>
        </div>
      </div>

      <section className={styles.shopSections}>
        <div className={styles.shopBox}>
          <h1>Shop mens</h1>
          <Image
            src="/images/menShoes.avif"
            alt="My Image"
            fill={true}
            className={styles.shopCardImage}/>
        </div>
        <div className={styles.shopBox}>Shop Womens</div>
        <div className={styles.shopBox}>Shop Brands</div>
        <div className={styles.shopBox}>Shop Styles</div>
      </section>

      {/* <section className={utilStyles.headingMd}></section> */}
    </Layout>
  );
}
