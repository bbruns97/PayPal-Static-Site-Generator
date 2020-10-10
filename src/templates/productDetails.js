import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import styled from "styled-components"
import PaypalComponent from "../components/paypalCheckoutOptions"

const DetailImgWrapper = styled.div`
    width: 60%;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <DetailImgWrapper>
                  <Img class="product_details_img" fluid={post.frontmatter.image.childImageSharp.fluid} />
                </DetailImgWrapper>
                <p>{post.frontmatter.price}</p>
                {post.frontmatter.active == true &&
                  <PaypalComponent  options={post.frontmatter.options} title={post.frontmatter.title} paypalInput={post.frontmatter.price} />
                }
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
        options
        active
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