import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"
import 'semantic-ui-css/semantic.min.css'


const LogoStyled = styled(Img)`
    width: 50px;
    height: 50px;
    @media (max-width: 30px) {
        height: 30px;
      }
`
const NavWrapper = styled.div`
  height: auto;
  width: 1917px;
  background: inherit;
  bottom: 0;
  overflow: hidden;
  position: relative;
  display: table;
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
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
                        keyword
                    }
                }
            }
        }
        file(relativePath: {eq: "logo.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const keywordsFound = []
  data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (keywordsFound.indexOf(node.frontmatter.keyword) === -1) {
              keywordsFound.push(node.frontmatter.keyword)
          }
      })
  return (
    <div css={css`margin: 0 auto; max-width: 700px;`}>
      <Header keywords={keywordsFound} siteTitle={data.site.siteMetadata.title} siteLogo={data.file.childImageSharp.fluid} cartCount="0"/>
      {children}
      <Footer />
    </div >
  )
}