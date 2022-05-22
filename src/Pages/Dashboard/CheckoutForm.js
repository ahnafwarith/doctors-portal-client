import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    // just a hook
    const stripe = useStripe()
    // the credentials and other inputted info in card data
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()
        // If no data found just return
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        // If no card data found
        if (card === null) {
            return
        }
    }
    return (
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
            <button className='btn btn-secondary mt-4 btn-sm' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;