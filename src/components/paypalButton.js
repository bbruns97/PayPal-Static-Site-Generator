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

		const { price } = this.props;


		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  
	


		const client = {
			sandbox:    'AR9KKF3e00OlfoK6HFh_IpEXzlnjgu4PnKfUb0cpQmL9_mNKsY66zkhnrRUsxAPgst2hS5CP2pcqLxTa',
			production: 'YOUR-PRODUCTION-APP-ID',
		}
		
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}