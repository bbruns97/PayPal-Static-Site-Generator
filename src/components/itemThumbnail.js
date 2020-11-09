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

const Heading = styled.h3`
    font-size: 2em;
    padding: 5px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;    
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

const itemThumbnail = (props) => {

    return (
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>
                <ImgStyled fluid={props.imageThumb} />
                <ItemThumbnailInfo>
                    <Header as="h4" content={props.heading} style={{fontSize: 25, fontFamily: "sans-serif"}} />
                    <div style={{color: "#444", fontSize: 16}} dangerouslySetInnerHTML={{ __html: props.exc }} />
                    <br></br>
                    {props.active === true &&
                        <div>
                            <div>
                                <PaypalComponent  options = { props.options } title = { props.title } price ={ props.price} />
                            </div>
                        </div>
                    }
                </ItemThumbnailInfo>
            </LinkStyled>
        </ItemThumbnailStyled >
    )
}





export default itemThumbnail;