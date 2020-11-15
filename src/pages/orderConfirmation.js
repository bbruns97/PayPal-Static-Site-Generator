import React from 'react'
import Layout from "../components/layout"

const OrderConfirmationPage = () => (
  <Layout>
    <h1 style={{color: 'black', fontSize: 60, textAlign: 'center'}}>
      <b>THANK YOU.</b>
    </h1>

    <p style={{color: 'black', fontSize: 24, textAlign: 'center'}}>
      Your order has been placed. <br></br>
      Please check your PayPal account for transaction details.   
    </p>
  </Layout>
)

export default OrderConfirmationPage
