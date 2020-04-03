import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import ItemThumbnail from "../components/itemThumbnail"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>

            <ThumbnailsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <ItemThumbnail key={node.fields.slug} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid}/>
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
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            price
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