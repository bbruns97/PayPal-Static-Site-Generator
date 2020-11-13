import React from 'react'

import Layout from "../components/layout"
import  Cart  from '../components/cart'
import PaypalButton from "../components/paypalButton"
import styled from "styled-components"

import { useCart } from '../../plugins/react-cart/react-cart'

const CartArea = styled.div`
    max-width: 800px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    margin: auto;
`

const CartTitle = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #222222;
    text-decoration: none solid rgb(34, 34, 34);
    margin-top: 39px;
    margin-bottom: 40px;
    margin-left: 30%;
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
    margin-left: 30%;
`

const OrderButton = styled.div`
    width: 150px;
    height: 24px;
    font-family: Roboto;
    font-size: 20px;
    color: #000000;
    text-decoration: none solid rgb(0, 0, 0);
    margin-top: 24px;
    margin-left: 30%;
    margin-bottom: 110px;
`

const CartPrice = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    color: #000000;
    text-decoration: none solid rgb(0, 0, 0);
    margin-top: 3px;
    margin-left: 30%;
`


function Returntotal(){
  
  const { cartTotal } = useCart()

  return ( <span >{ cartTotal }</span > )

}

const CheckoutPage = () => (
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

    <OrderButton>
      <PaypalButton price={0} title = {0} option ={0}  amount={0} />
    </OrderButton>
    
    
    
  </Layout>
)

export default CheckoutPage


//<PaypalButton price={paypalInput} title = {title} option ={this.state.selectedOption}  amount={this.state.value} />
