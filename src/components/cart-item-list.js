import React from 'react'
import { useCart } from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'
import CartItem from './cart-item'

function Cart() {
  const { items } = useCart()

  return <div className="cart-item-list">{items.map(CartItem)}</div>
}

export default Cart
