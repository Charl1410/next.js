import React from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import styles from '../styles/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.header}>Blog</h1>
      </div>
      <Card />
    </Layout>
  );
}

export default blog