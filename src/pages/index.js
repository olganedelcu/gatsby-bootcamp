import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from'../components/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Home"/>
      <h1>Hello. </h1>
      <p>This is the official website of Hack Club Malagón</p>
      <p>Hey there!</p>
    </Layout>
    </div>  
  )
}


export default IndexPage
