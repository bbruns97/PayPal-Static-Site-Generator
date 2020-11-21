import React from 'react'
import  { useCart }  from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'

import { Link } from "gatsby"


export default function Customadd(props)  {

 
    
    const { addItem } = useCart()

    const  product  = {id: props.id, name: props.title, options: props.option, price: props.price, amount: props.amount, imageThumb: props.imageThumb}
   
        

        

        return (
           
           <div>
                <button style={{width: 261, height: 40, backgroundColor: '#121212', backgroundSize: 'cover', font: 'Roboto', fontSize: 16, color: '#ffffff', textAlign: 'center', cursor: 'pointer'}} onClick={() => addItem( product,  product.amount )}>ADD TO CART </button>

            
            </div>
        )   

      
}
