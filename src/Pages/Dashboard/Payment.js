import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2IVhIig3HH1x3lu4SW8ZVPAXEXPOnUOVtyC0JKo3D9QJhZ2Shr3dJVFTa8OPegsBOjttiMgbbeGb7OzFjQLYoN00bi64AiMH');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:4000/bookings/${id}`
    const { data: booking, isLoading } = useQuery(['booking', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(booking)
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-xl'>Hello, <span className='text-secondary font-bold'>{booking.patientName}</span></p>
                    <h2 class="card-title">Make payment for {booking.treatmentName}</h2>
                    <p>Your appointment is selected on <span className='text-orange-400'>{booking.date}</span> at {booking.slot}</p>
                    <p>Please pay <span className='text-xl text-gray-600 font-bold'>${booking.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 mt-8 flex justify-center w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;