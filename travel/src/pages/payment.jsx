// client/src/components/Payment.js
import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
    const [amount, setAmount] = useState(0);

    const handlePayment = () => {
        axios.post('/payment', { amount })
            .then((response) => {
                const { orderId } = response.data;
             
                const options = {
                    key: 'your-razorpay-key',
                    amount: amount * 100, // amount in paise
                    currency: 'INR',
                    name: 'Your App Name',
                    description: 'Ride Payment',
                    order_id: orderId,
                    handler: function (response) {
                        alert('Payment successful');
                        console.log(response);
                    },
                    prefill: {
                        name: 'User Name',
                        email: 'user@example.com',
                        contact: '9999999999'
                    },
                    theme: {
                        color: '#3399cc'
                    }
                };
                const rzp = new window.Razorpay(options);
                rzp.open();
            })
            .catch((error) => {
                console.error('Error initiating payment:', error);
            });
    };

    return (
        <div>
            <h2>Complete Payment</h2>
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}

export default Payment;
