import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({booking}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = new useStripe();
    const elements = new useElements();
    const [clientSecret, setClientSecret] = useState("");
    const {sellPrice, email,buyerName, productId} = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://mobile-resell-server.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({ sellPrice }),
        })
          .then((res) => res.json())
          .then((data) => 
          setClientSecret(data.clientSecret)
          );
      }, [sellPrice]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: buyerName,
                  email: email
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return;
          }

          if(paymentIntent.status === "succeeded"){
            console.log(card);
            setSuccess('Congrats! your payment completed')
            setTransactionId(paymentIntent.id)
            // store payment info in the database
            const payment ={
                sellPrice,
                email,
                transactionId: paymentIntent.id,
                bookingId: productId,
            }
            console.log(productId)
            fetch('https://mobile-resell-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    setSuccess('Congrats! your payment completed')
                    setTransactionId(paymentIntent.id);
                }
            })
          }

          setProcessing(false)
          console.log('paymentIntent', paymentIntent);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button 
            className="btn btn-sm btn-primary"
            type="submit" 
            disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your transactionId: <span className="font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;