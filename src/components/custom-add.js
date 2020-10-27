import React from 'react'
import  { useCart }  from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'

import { Link } from "gatsby"

export default function Customadd(props)  {

 
    
    const { addItem } = useCart()

    const  product  = {id: props.id, name: props.title, description: props.option, price: props.price, amount: props.amount}
   
        

        

        return (
           
           <div>
            <Link to="/checkout">
            <button onClick={() => addItem( product,  product.amount )}>Add to Cart</button>
            
            </Link>
            </div>
        )   

      
}
