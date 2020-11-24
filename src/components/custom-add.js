import React from 'react'
import  { useCart }  from '../../plugins/react-cart/react-cart'
//import { useCart } from 'react-use-cart'

import { Link } from "gatsby"


export default function Customadd(props)  {

 
    
    const { addItem } = useCart()

    const  product  = {id: props.id, name: props.title, options: props.option, price: props.price, amount: props.amount, imageThumb: props.imageThumb}
   
       function confirmationFeedback(){
            document.getElementById('confirmationMessage').style.display = 'block'
            setTimeout(function(){ document.getElementById('confirmationMessage').style.display = 'none'; }, 3000);
       } 

        return (
           
           <div>
                <button style={{width: 261, height: 40, backgroundColor: '#121212', backgroundSize: 'cover', font: 'Roboto', fontSize: 16, color: '#ffffff', textAlign: 'center', cursor: 'pointer'}} onClick={() => {addItem( product,  product.amount ); confirmationFeedback()}}>ADD TO CART </button>

                <div id='confirmationMessage' style={{zIndex: '100', display: 'none', backdropFilter: 'blur(5px)', position: 'fixed', top: '40px', left: '50%', transform: 'translateX(-50%)',  padding: '10px 30px', border: '1px solid rgb(46, 255, 140)', fontFamily: 'Roboto', backgroundColor: 'rgb(168, 255, 207, .9)'}}>
                    <p style={{color: 'rgb(61, 61, 61)'}}>Item added to cart. &#10004;</p>
                </div>
            
            </div>
        )   

      
}
