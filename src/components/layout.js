import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import styled from "styled-components"


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
  return (
    <div css={css`margin: 0 auto; max-width: 700px;`}>
      <NavWrapper>
        <Link to={`/`}>
          <LogoStyled fluid={data.file.childImageSharp.fluid} alt="Logo not loaded." />
        </Link>

        <Link to={`/`}>
          <h3 css={css`font-style: normal; background-color: red;`}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
      </NavWrapper>

      {children}
    </div >
  )
}