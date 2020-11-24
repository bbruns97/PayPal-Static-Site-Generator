import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Header} from 'semantic-ui-react'



const ItemThumbnailStyled = styled.div`
    width: 300px;
    height: 620px;
    display: flex;
    border-radius: 10px;
    fill: #ffffff;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    stroke-width: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const ItemInactiveThumbnailStyled = styled.div`
    width: 300px;
    height: 620px;
    display: flex;
    border-radius: 10px;
    fill: #ffffff;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    stroke-width: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    filter: grayscale(100%);
`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`

const LinkStyledInactive = styled.div`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ImgStyled = styled(Img)`
    height: 228px;
    width: auto;
    max-width: 300px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`


const ItemThumbnailInfo = styled.div`
    width: 300px;
    height: 392px;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    padding-left: 15px;
`

const ItemThumbnailInactiveInfo = styled.div`
    width: 300px;
    height: 392px;
    display: flex;
    color: "#696969";
    flex-direction: column;
    font-family: Roboto;
    padding-left: 15px;
`


const itemThumbnail = (props) => {

    return (
        <div>
        {props.active === true &&
            <ItemThumbnailStyled>
                <LinkStyled to={props.link}>
                    <ImgStyled fluid={props.imageThumb} style={{maxWidth:'100%'}} />
                </LinkStyled>
                <ItemThumbnailInfo>
                <LinkStyled to={props.link}><Header as="h4" content={props.heading} style={{paddingTop: '15px', height: "3.0em", fontSize: 28, maxWidth: '100%', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none solid rgb(0, 0, 0)'}} />
                </LinkStyled>
                    <div style={{paddingRight: '20px', height: "3.2em", fontSize: 18, maxWidth: '100%', color: '#222222', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none solid rgb(34, 34, 34)'}} dangerouslySetInnerHTML={{ __html: props.exc }} />
                    <br></br>
                    {props.active === true &&
                        <div>
                            <div>
                                <PaypalComponent  options = { props.options } title = { props.heading } price ={ props.price} imageThumb = {props.imageThumb} />
                            </div>
                        </div>
                    }

                </ItemThumbnailInfo>
            </ItemThumbnailStyled >
        }
        {props.active === false &&
            <ItemInactiveThumbnailStyled>
                <LinkStyledInactive>
                    <ImgStyled fluid={props.imageThumb} />
                </LinkStyledInactive>
                <ItemThumbnailInactiveInfo>
                    <Header as="h4" content={props.heading} style={{paddingTop: '15px', height: "3.0em", fontSize: 28, maxWidth: '100%', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none solid rgb(0, 0, 0)'}} />
                    <div style={{paddingRight: '20px',height: "3.2em", fontSize: 18, maxWidth: '100%', color: '#222222', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none solid rgb(34, 34, 34)'}} dangerouslySetInnerHTML={{ __html: props.exc }} />
                    <br></br>
                    <p style={{textAlign: "center", fontSize: 18, color: '#222222'}}> <i>Not Currently Available</i></p>
                </ItemThumbnailInactiveInfo>
            </ItemInactiveThumbnailStyled>

        }
        </div>
    )
}





export default itemThumbnail;