import React from 'react'
import Layout from "../components/layout"

const ErrorPage = () => (
  <Layout>
    <h1 style={{color: 'black', fontSize: 60, textAlign: 'center'}}>
      <b>404</b>
    </h1>

    <p style={{color: 'black', fontSize: 24, textAlign: 'center'}}>
      Oops something is not right <br></br>
    </p>
  </Layout>
)

export default ErrorPage
