import React from 'react';
import { useCart } from '../../plugins/react-cart/react-cart';
import styled from "styled-components";
import Img from "gatsby-image";


const Div_cartItemWrapper = styled.div`
    display: inline-block;
    width: 315px;
    height: auto;
    margin: 10px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const Img_thumbnail = styled(Img)`
    width: 315px;
    height: 230px;
    background-color: lightgray;
`

const Div_infoContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`

const Div_infoContainer_Background = styled.div`
    width: 315px;
    height: 190px;
    fill: #ffffff;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const Span_title = styled.span`
  font-family: Roboto;
  font-size: 25px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
`

const Div_title = styled.div`
  padding-top: 17px;
  width: 285px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
`

const Span_subtext = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  display: inline-block;
`

const Div_subWrapper = styled.div`
  margin-bottom: 7px;
`

const Div_valueWrapper_quantity = styled.div`
  height: 19px;
  max-width: 161px;
  vertical-align: text-bottom;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`

const Div_valueWrapper = styled.div`
  height: 19px;
  max-width: 220px;
  vertical-align: text-bottom;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`

const Div_quantity_Value = styled.div`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  margin-left: 20px;
  width: 141px;
  display: inline-block;
`

const P_option = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  margin-left: 35px;
  display: inline;
`

const P_price = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  margin-left: 48px;
  display: inline;
`

const Div_incrementer = styled.div`
  vertical-align: text-bottom;
  display: inline
`

const Div_removeButton = styled.div` 
  margin-left: 210px;
`

//import { useCart } from 'react-use-cart'
function CartItem({ id, name, options, quantity, imageThumb, price}) {
  const { updateItemQuantity, removeItem } = useCart()

  const increment = () => updateItemQuantity(id, parseInt(quantity) + 1 )
  const decrement = () => updateItemQuantity(id, quantity - 1)
  const remove = () => removeItem(id)

  return (
    <Div_cartItemWrapper key={id} className="cart-list-item">
      
      <Img_thumbnail fluid={imageThumb} />
      
      <Div_infoContainer_Background>
        <Div_infoContainer>

          <Div_title>
            <Span_title>{name}</Span_title>
          </Div_title>

          <Div_subWrapper>
              <Span_subtext>Quantity:</Span_subtext> 

            <Div_valueWrapper_quantity>
              <Div_quantity_Value className="cart-item-quantity--amount">{quantity}</Div_quantity_Value>
            </Div_valueWrapper_quantity>

            <Div_incrementer>
              <button onClick={decrement} style={{cursor: 'pointer', color: '#555', border: 'none', boxShadow: '0 0 3px #AAA', backgroundColor: "#EEE", marginRight:'4px'}} className="cart-list-item-button cart-list-item-button--decrement"> - </button>
              <button onClick={increment} style={{cursor: 'pointer', color:'#555', border: 'none', boxShadow: '0 0 3px #AAA', backgroundColor: "#EEE", marginRight:'4px'}} className="cart-list-item-button cart-list-item-button--increment"> + </button>
            </Div_incrementer>
          </Div_subWrapper>


          <Div_subWrapper>
            <Span_subtext>Option:</Span_subtext> 

            <Div_valueWrapper>
              <P_option>{options}</P_option>
            </Div_valueWrapper>
          </Div_subWrapper>
            
          <Div_subWrapper>
            <Span_subtext>Price:</Span_subtext>

            <Div_valueWrapper>
              <P_price>${(price * quantity).toFixed(2)}</P_price>
            </Div_valueWrapper>
          </Div_subWrapper>

          <Div_removeButton>
            <button onClick={remove} style={{cursor: 'pointer', color:'#555', border: 'none', boxShadow: '0 0 3px #AAA', backgroundColor: "#EEE", marginRight:'4px', padding: 10}} className="cart-list-item-button cart-list-item-button--remove-item"> Remove </button>
          </Div_removeButton>
          
        </Div_infoContainer>
      </Div_infoContainer_Background>

    </Div_cartItemWrapper>
  )
}

export default CartItem
