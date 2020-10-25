import React from "react"
import PropTypes from "prop-types"
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

const Keys = ({ pageContext, data }) => {
  const { key } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
        <ThumbnailsWrapper>
            {edges.map(({ node }) => (
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
Keys.propTypes = {
  pageContext: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
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