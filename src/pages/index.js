import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import ItemThumbnail from "../components/itemThumbnail"
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Header} from 'semantic-ui-react'

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
        <Layout style={{width: 'fit-content(20em)'}}>
          
            <Header className='products_header' as="h2" content='PRODUCTS' style={{fontSize: 35, maxWidth: 725, margin: '20px auto 0 auto', textAlign: 'center'}}  />
            <ThumbnailsWrapper style={{margin: '0 auto', maxWidth: 775}}>
              
            {data.allMarkdownRemark.edges.map(({ node }) => (

                <div key={node.id}>
                    <ItemThumbnail exc={ node.excerpt } key={node.fields.slug} options={node.frontmatter.options} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid} active={node.frontmatter.active} />
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
