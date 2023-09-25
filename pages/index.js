import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";



export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>This is the homepage</p>
      <Image
        src="/images/banner.jpg"
        alt="My Image"
        width={1300} // Set the desired width
        height={400} // Set the desired height
      />
      <section className={utilStyles.headingMd}></section>
    </Layout>
  );
}
