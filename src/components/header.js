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


function ReturnTotalItems(){\

  const  totalItems  = 0
  if(typeof useCart() == undefined || typeof useCart() == null){
    totalItems = useCart()
  }
  else {
    totalItems = 0
  }
  

    return (totalItems)

  

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
          maxWidth: "95%",
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
              <LogoStyled fluid={siteLogo} style={{width: 80}} alt="Logo not loaded." />
              </Link>
        <h1 style={{ margin: 0, flex: 1, paddingLeft: 0, fontSize: 22 }}>
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
              <div class="ui simple dropdown item" style={{fontWeight: "bold"}}>
                Categories
                <i class="dropdown icon"></i>
                <div class="menu">
                  {keywords.map(key => (
                    <Link style={{color:"black", fontWeight: "bold"}} to={key}><div class="item">{key.slice(1)}</div></Link>
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