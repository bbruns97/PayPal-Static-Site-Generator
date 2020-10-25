import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
        <h1>{data.site.siteMetadata.title}</h1>
    <p>
      ACME bakery is a family owned and operated bakery. We have been in business since 1928, with recipes being passed down generation to generation. We are currently run by Sarah Johnson, the great-granddaughter of the founder - Dorthy Johnson. We specialize in all types of baked sweets. Whether you are looking for cookies, cupcakes, custom cakes, or other goodies we can help you out! Stop by and see us soon.</p>
    <p></p>
      <p>From our family to yours,<br />
      The Johnson’s</p>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`