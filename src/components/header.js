import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import styled from "styled-components"
import {Segment} from 'semantic-ui-react'
import { useCart } from '../../plugins/react-cart/react-cart'

const LogoStyled = styled(Img)`
    width: 50px;
    height: 50px;
    @media (max-width: 30px) {
        height: 30px;
      }
`


function ReturnTotalItems(){
  
  const { totalItems } = useCart()

  return (  <div>{ totalItems } </div> )

}

const Header = ({ siteTitle, menuLinks, siteLogo }) => (
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
          
            <ul style={{ display: "flex", flex: 1 }}>
            
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `black` }} to={link.link}>
                    {link.name}
                  </Link>
                 
                </li>
                
              ))
              
              }
               <Link style={{ 
                 color: `black`,
                 listStyleType: `none`,
                 padding: `1rem`,
                  }}
                to="/checkout"> Checkout <ReturnTotalItems/></Link>
            </ul>
          </nav>
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