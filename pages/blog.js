import React from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const blog = () => {
  const functionName = "Blog"
  return (
    <Layout>
      <Banner pageName={functionName}/>
      <Card />
    </Layout>
  );
}

export default blog