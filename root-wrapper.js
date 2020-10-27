import React from "react"
import { CartProvider } from "./plugins/react-cart/react-cart"

export const wrapPageElement = ({ element }) => (
  <>
    <CartProvider>{element}</CartProvider>
  </>
)
