import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import ItemThumbnail from "../components/itemThumbnail"
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Header} from 'semantic-ui-react'

const ThumbnailsWrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
`

const ProductsTitle = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #222222;
    text-decoration: none solid rgb(34, 34, 34);
    margin: 0 auto;
    width: 100%;
    padding-left: 25px;
    margin-bottom: 15px;
`

const Keys = ({ pageContext, data }) => {
  console.log(data);
  const { key } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout style={{margin: '0 auto'}}>
        
        <ThumbnailsWrapper style={{maxWidth: '700px'}} css='@media(max-width: 800px){.products_title {text-align: center;}}'>
  <ProductsTitle className='products_title'>{key.toUpperCase()}</ProductsTitle>
            {edges.map(({ node }) => (
                <div key={node.id} style={{margin: '10px auto'}}>
                    <ItemThumbnail exc={ node.excerpt } key={node.fields.slug} options={node.frontmatter.options} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid} active={node.frontmatter.active}/>

                </div>

            ))}
        </ThumbnailsWrapper>
    </Layout>
  )
}

export default Keys
export const pageQuery = graphql`
  query($key: String) {
    allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true }, keyword: { in: [$key] } } }) {
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
                    fluid(maxWidth: 1000) {
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