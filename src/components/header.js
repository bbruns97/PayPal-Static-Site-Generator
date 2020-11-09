import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import styled from "styled-components"
import {Segment} from 'semantic-ui-react'
import { useCart } from '../../plugins/react-cart/react-cart'
import ShoppingCartIcon from './ShoppingCartIcon'

const LogoStyled = styled(Img)`
    width: 50px;
    height: 50px;
    @media (max-width: 30px) {
        height: 30px;
      }
`


function ReturnTotalItems(){
  
  const { totalItems } = useCart()

  return (`${totalItems}`)

}


const Header = ({ keywords, siteTitle, menuLinks, siteLogo, cartCount }) => (
    <Segment
    vertical
    style={{
      borderTop: '1px solid #f2f2f2',
    }}
  >
  <header>
    <div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1200,
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
              <LogoStyled fluid={siteLogo} alt="Logo not loaded." />
              </Link>
        <h1 style={{ margin: 0, flex: 1 }}>
        <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <div class="ui compact menu">
              <div class="ui simple dropdown item">
                Products
                <i class="dropdown icon"></i>
                <div class="menu">
                  {keywords.map(key => (
                    <Link to={key}><div class="item">{key}</div></Link>
                 ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="shoppingCart"
            style={{
                padding: 15
            }}
        >
            <Link
                to="/checkout"
                style={{
                    color: "black",
                    textDecoration: "none",
                }}
            >
                <ShoppingCartIcon cartCount={ReturnTotalItems()} name="Cart" />
            </Link>
        </div>
      </div>
    </div>
  </header>
  </Segment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
export const data = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            keyword
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