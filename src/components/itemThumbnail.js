import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Header} from 'semantic-ui-react'



const ItemThumbnailStyled = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const ItemInactiveThumbnailStyled = styled.div`
    width: 350px;
    display: flex;
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
`

const Price = styled.p`
    padding-bottom: 10px;
`


const ImgStyled = styled(Img)`
    height: 200px;
    width: auto;
    max-width: 350px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: cover;
    background-position: center center;
`


const ItemThumbnailInfo = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid lightgray;
    border-left: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 15px;
    box-shadow: .25px .25px 8px lightgray;
`

const ItemThumbnailInactiveInfo = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    color: "#696969";
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid lightgray;
    border-left: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 15px;
    box-shadow: .25px .25px 8px lightgray;
`


const itemThumbnail = (props) => {

    return (
        <div>
        {props.active === true &&
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>
                <ImgStyled fluid={props.imageThumb} />
                
            </LinkStyled>
                <ItemThumbnailInfo>
                    <Header as="h4" content={props.heading} style={{fontSize: 25, fontFamily: "sans-serif"}} />
                    <div style={{fontSize: 16}} dangerouslySetInnerHTML={{ __html: props.exc }} />
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
                    <LinkStyled to={props.link}>
                        <ImgStyled fluid={props.imageThumb} />

                    </LinkStyled>
                        <ItemThumbnailInactiveInfo>
                            <Header as="h4" content={props.heading} style={{color: "#696969", fontSize: 25, fontFamily: "sans-serif"}} />
                            <div style={{fontSize: 16}} dangerouslySetInnerHTML={{ __html: props.exc }} />
                            <br></br>
                            <p style={{textAlign: "center"}}> <i>Not Currently Available</i></p>
                        </ItemThumbnailInactiveInfo>
                </ItemInactiveThumbnailStyled>

        }
        </div>
    )
}





export default itemThumbnail;