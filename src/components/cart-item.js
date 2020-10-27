import React from 'react'
import { useCart } from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'
function CartItem({ id, name, description, quantity}) {
  const { updateItemQuantity, removeItem } = useCart()

  const increment = () => updateItemQuantity(id, parseInt(quantity) + 1 )
  const decrement = () => updateItemQuantity(id, quantity - 1)
  const remove = () => removeItem(id)

  return (
    <div key={id} className="cart-list-item">
      <div className="cart-list-item--name">
        {name}
        <div>
        {description}
          </div> 
        
       
      </div>

      <div className="cart-list-item--quantity">
        <div className="cart-item-quantity--wrapper">
          <button
            onClick={decrement}
            className="cart-list-item-button cart-list-item-button--decrement"
          >
            -
          </button>

          <span className="cart-item-quantity--amount">{quantity}</span>

          <button
            onClick={increment}
            className="cart-list-item-button cart-list-item-button--increment"
          >
            +
          </button>
        </div>

        <button
          onClick={remove}
          className="cart-list-item-button cart-list-item-button--remove-item"
        >
          Remove item
        </button>
      </div>
    </div>
  )
}

export default CartItem
