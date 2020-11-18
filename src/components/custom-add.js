import React from 'react'
import  { useCart }  from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'

import { Link } from "gatsby"

export default function Customadd(props)  {

 
    
    const { addItem } = useCart()

    const  product  = {id: props.id, name: props.title, options: props.option, price: props.price, amount: props.amount, imageThumb: props.imageThumb}
   
        

        

        return (
           
           <div>
                
            <button style={{width: 250, height: 40, borderRadius: 0, outline: 'none', border: 'none', color: 'white', backgroundColor: 'black', fontWeight: 'bold', fontSize: 16, cursor: 'pointer'}} onClick={() => addItem( product,  product.amount )}>ADD TO CART </button>
            
            
            </div>
        )   

      
}
