import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";


export default function Home() {

  //the layout wraps the app 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/blog">Link to data pull page</Link>
        <p> 
          
        </p>
      </section>
    </Layout>
  );
}
