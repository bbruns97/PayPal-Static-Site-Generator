import React from 'react'
import { useCart } from '../../plugins/react-cart/react-cart'
import styled from "styled-components"
import Img from "gatsby-image";
const CartItemDiv = styled.div`
    display: inline-block;
    width: 315px;
    height: 400px;
    margin: 10px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const CartItemInfo = styled.div`
    width: 315px;
    height: 150px;
    fill: #ffffff;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const ImageDiv = styled(Img)`
    width: 315px;
    height: 250px;
    background-color: lightgray;
`

const InfoContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`

const TitleStyle = styled.span`
  font-family: Roboto;
  font-size: 25px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);

  margin-bottom: 15px;

  display: inline-block;
  vertical-align: bottom;

  width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TextStyle = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  display: inline-block;
`

const TextStyleQuantity = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  margin-left: 15px;
  display: inline;
`

const TextStyleOption = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  margin-left: 30px;
  display: inline-block;
  vertical-align: bottom;

  height: 23px;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const IncrementStyle = styled.span`
  margin-left: 10px;
`

const RemoveButton = styled.div`
  margin-top: 15px;  
  margin-left: 186px;
`

//import { useCart } from 'react-use-cart'
function CartItem({ id, name, options, quantity, imageThumb, price}) {
  const { updateItemQuantity, removeItem } = useCart()

  const increment = () => updateItemQuantity(id, parseInt(quantity) + 1 )
  const decrement = () => updateItemQuantity(id, quantity - 1)
  const remove = () => removeItem(id)

  return (
    <CartItemDiv key={id} className="cart-list-item">
      <ImageDiv fluid={imageThumb} />
      
      

      <CartItemInfo>
      
        <InfoContainer>
          <br/>
          <div className="cart-list-item--name">
            <TitleStyle>{name}</TitleStyle>
            
          </div>

          <div className="cart-list-item--quantity">

            <div className="cart-item-quantity--wrapper">
              <TextStyle>Quantity: <TextStyleQuantity className="cart-item-quantity--amount">{quantity}</TextStyleQuantity></TextStyle>

              <IncrementStyle>
                <button
                  onClick={decrement}
                  className="cart-list-item-button cart-list-item-button--decrement"
                >
                  -
                </button>

                <button
                  onClick={increment}
                  className="cart-list-item-button cart-list-item-button--increment"
                >
                  +
                </button>
              </IncrementStyle>
            </div>

            <TextStyle>Option: <TextStyleOption>{options}</TextStyleOption></TextStyle> 
            <TextStyle>Cost:  <TextStyleOption> ${price * quantity}</TextStyleOption></TextStyle> 
            <br/>

            <RemoveButton>
              <button
                onClick={remove}
                className="cart-list-item-button cart-list-item-button--remove-item"
              >
                Remove item
              </button>
            </RemoveButton>
            

          </div>
        </InfoContainer>

      </CartItemInfo>
    </CartItemDiv>
  )
}

export default CartItem
