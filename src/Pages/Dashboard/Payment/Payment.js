import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <Loading></Loading>
    }
    console.log(booking)
    return (
        <div>
            <h2>Product: {booking.productName}</h2>
            <p className="text-xl">Price: ${booking.sellPrice
}</p>
    <div className="w-96 h-20">
    <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking} />
    </Elements>
    </div>
        </div>
    );
};

export default Payment;