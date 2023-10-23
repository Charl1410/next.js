import React from 'react'
import Layout from '../components/layout'
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