import React from 'react';
import PaypalExpressBtn from 'gatsby-paypal-button';
import { useCart } from '../../plugins/react-cart/react-cart';









export default function PaypalButton(props)  {

	const { emptyCart } = useCart()
	
	const { items, total, itemAmounts } = props;
	var itemsString = []
	var count;	
	if (items != null){
		for (count = 0; count < items.length; count++)
		{
			var add = ""
			if (itemsString != null)
			{
			
				var temp  = {
					"name": items[count].name,
					"description": items[count].options,
					"quantity": itemAmounts[count],
					"price": items[count].price, 
					"tax": "",
					"sku": items[count].options,
					"currency": "USD",
					}
				
				itemsString = itemsString.concat(temp)

			}

			
		}
	}

		

		const onSuccess = (payment) => {
			 
			window.location.replace("/orderConfirmation");
			
			console.log("Payment successful!", payment);
			emptyCart()
            	
		}

		const onCancel = (data) => {
			console.log('Payment cancelled!', data);
		}

		const onError = (err) => {
			console.log("Error!", err);
		}


		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  

		const client = {
			sandbox:   	'AR9KKF3e00OlfoK6HFh_IpEXzlnjgu4PnKfUb0cpQmL9_mNKsY66zkhnrRUsxAPgst2hS5CP2pcqLxTa',
			production: 'YOUR-PRODUCTION-APP-ID',
		}
	

        return (
			
            <PaypalExpressBtn env={env} paymentOptions = { 
				{ 
					"transactions": [
						{
						  "amount": {
							"total":  total,
							"currency": "USD",
							"details": {
							  "subtotal": total,
							  "tax": "0",
							  "shipping": "0",
							  "handling_fee": "0",
							  "shipping_discount": "0",
							  "insurance": "0"
							}
						  },
						  "description": "",
						  "item_list": {
							"items":itemsString
							
						  }
						}
					  ]} } shipping = { 2 } client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }


