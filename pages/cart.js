import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const cart = () => {
    const functionName = "Cart";

  return (
    <Layout>
      <Banner pageName={functionName}/>
    </Layout>
  );
}

export default cart