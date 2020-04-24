import React from 'react';
import PaypalExpressBtn from 'gatsby-paypal-button';

export default class PaypalButton extends React.Component {
    render() {
		const onSuccess = (payment) => {
			
			

            console.log("Payment successful!", payment);
            	
		}

		const onCancel = (data) => {
			console.log('Payment cancelled!', data);
		}

		const onError = (err) => {
			console.log("Error!", err);
		}

		const { title, option, price , amount } = this.props;


		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  
		
		let total = price * amount

		const client = {
			sandbox:    'AR9KKF3e00OlfoK6HFh_IpEXzlnjgu4PnKfUb0cpQmL9_mNKsY66zkhnrRUsxAPgst2hS5CP2pcqLxTa',
			production: 'YOUR-PRODUCTION-APP-ID',
		}
		
        return (
            <PaypalExpressBtn env={env} paymentOptions = { { "transactions" : [ 
				{
					"amount":
					{
						"total": total,
						"currency": "USD",
						"details":
						{
						"subtotal": total,
						"tax": "0",
						"shipping": "0",
						"handling_fee": "0",
						"shipping_discount": "0",
						"insurance": "0"
						}
					},
					"description": "This is the payment transaction description.",
					"item_list": {
						"items": [{
						"name": title + " [" + option + "]",
						"description": "",
						"quantity": amount,
						"price": price,
						"tax": "",
						"sku": "1",
						"currency": "USD"
						}]
					}
				}
			]}  } shipping = { 2 } client={client} currency={currency} total={price * amount} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}