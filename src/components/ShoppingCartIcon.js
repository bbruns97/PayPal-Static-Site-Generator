import React from 'react'
import {Icon} from 'semantic-ui-react'

const ShoppingCartIcon = ({cartCount, name}) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `0`
    }
    if (cartCount > 9) {
      return (
        <span style={{}}>
          9+
        </span>
      )
    }
    return `${cartCount}`
  }
  return (
    <div style={{marginTop: 5}}>
      <span style={{fontSize: 14, fontWeight: "bold", color: "white", backgroundColor: "black", width: 15, height: 15, borderRadius: "50%", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>{showCartCount()}</span>
      <Icon name="cart" style={{color: "black", fontSize: 25, marginLeft: 5, verticalAlign: "middle", marginTop: 1}} />
    </div>
  )
}

export default ShoppingCartIcon