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
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    margin: auto;
`

const Keys = ({ pageContext, data }) => {
  console.log(data);
  const { key } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout style={{width: 'fit-content(20em)'}}>
        <Header className='products_header' as="h2" content='PRODUCTS' style={{fontSize: 35, maxWidth: 725, margin: '20px auto 0 auto', textAlign: 'center'}}  />
        <ThumbnailsWrapper>
            {edges.map(({ node }) => (
                <div key={node.id}>
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