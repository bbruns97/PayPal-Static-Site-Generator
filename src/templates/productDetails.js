import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";



export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <p>{post.frontmatter.price}</p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        image{
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
    }
  }
`