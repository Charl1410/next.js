import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const blog = () => {
  const buttonName = "Read more"
  return (
    <Layout>
      <Banner pageName={"Blog"}/>
      <Card />
    </Layout>
  );
}

export default blog