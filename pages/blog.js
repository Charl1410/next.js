import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const blog = () => {
  const functionName = "Blog"
  const buttonName = "Read more"
  return (
    <Layout>
      <Banner pageName={functionName}/>
      <Card />
    </Layout>
  );
}

export default blog