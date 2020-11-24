import React from 'react'

import Layout from "../components/layout"
import  Cart  from '../components/cart'
import PaypalButton from "../components/paypalButton"
import styled from "styled-components"

import { useCart } from '../../plugins/react-cart/react-cart'

const CartArea = styled.div`
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-left: 20%;
`

const CartTitle = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #222222;
    text-decoration: none solid rgb(34, 34, 34);
    margin-top: 39px;
    margin-bottom: 40px;
    margin-left: 20%;
`
const CartText = styled.p`
    width: 150px;
    height: 24px;
    font-family: Roboto;
    font-size: 20px;
    color: #000000;
    text-decoration: none solid rgb(0, 0, 0);
    margin-top: 40px;
    margin-bottom: 0px;
    margin-left: 20%;
`

const OrderButton = styled.div`
    width: 150px;
    height: 24px;
    font-family: Roboto;
    font-size: 20px;
    color: #000000;
    text-decoration: none solid rgb(0, 0, 0);
    margin-top: 24px;
    margin-left: 20%;
    margin-bottom: 110px;
`

const CartPrice = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #000000;
    text-decoration: none solid rgb(0, 0, 0);
    margin-top: 3px;
    margin-left: 20%;
`

var cartItemLists 
var myItemAmounts

function Returntotal(){
    
  const { cartTotal } = useCart()

  return ( cartTotal.toFixed(2) )

}

function ItemsReturn(){
  
  const { items,  itemAmounts} = useCart()
   cartItemLists = items

    myItemAmounts = itemAmounts


}


function CheckoutPage(props){

  


var cartTotal = Returntotal()


ItemsReturn()



 return(
  <Layout>
    
    <CartTitle>
      MY CART
     
    </CartTitle>

    <CartArea>
        <Cart/>
    </CartArea>

    <CartText>
      TOTAL
    </CartText>

    <CartPrice>
      $<Returntotal/> USD
   
    </CartPrice>

    <OrderButton >
     
      <PaypalButton items={cartItemLists} total={cartTotal} itemAmounts = {myItemAmounts}/>
      <div id='confirmationMessage'></div>
      {
        // DO NOT REMOVE THE ABOVE LINE (118)
      }

    </OrderButton>
    
    
  </Layout>
 )
}

export default CheckoutPage


