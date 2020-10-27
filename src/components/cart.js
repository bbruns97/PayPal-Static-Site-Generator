import React from 'react'
import { useCart } from '../../plugins/react-cart/react-cart'
// { useCart } from 'react-use-cart'
import CartItemList from './cart-item-list'

export default function Cart() {
  const { isEmpty } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>

  return <CartItemList />
}

