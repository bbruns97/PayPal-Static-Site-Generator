import React from 'react'

import {graphql} from "gatsby"
import Layout from "../components/layout"
import  Cart  from '../components/cart'
import PaypalButton from "../components/paypalButton"

import { useCart } from '../../plugins/react-cart/react-cart'



function Returntotal(){
  
  const { cartTotal } = useCart()

  return ( <span >{ cartTotal }</span > )

}

const CheckoutPage = () => (
  <Layout>
    <h1>Cart</h1>
    <Cart />
    Total is : $<Returntotal></Returntotal>
    
  </Layout>
)

export default CheckoutPage


//<PaypalButton price={paypalInput} title = {title} option ={this.state.selectedOption}  amount={this.state.value} />
