import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import ItemThumbnail from "../components/itemThumbnail"
import PaypalComponent from "../components/paypalCheckoutOptions"


const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`
export default ({ data }) => {
    console.log(data);
    return (
        <Layout>
            
            <ThumbnailsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <ItemThumbnail key={node.fields.slug} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid} active={node.frontmatter.active}/>
                    {node.frontmatter.active == true &&
                      <div>
                        <div>
                          <PaypalComponent  options = { node.frontmatter.options} title = { node.frontmatter.title} paypalInput ={node.frontmatter.price} />
                          
                        </div>
                      </div>
                    }
                </div>
                
            ))}
            </ThumbnailsWrapper>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        linksList
      }
    }
    allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            price
            options
            active
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
