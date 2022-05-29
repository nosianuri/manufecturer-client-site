import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4VVXAiDrxiU15buNudf63hkibtJVwTwALbApBAnNBeGB2IuoKnvOONa4UgrRsqcr7To4YzfGEBuPhELHVS35MM00LB20424H');

const Payment = () => {

    const { id } = useParams();
    const url = `https://thawing-depths-15200.herokuapp.com/order/${id}`;

    const { data: service, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {service.displayName}</p>
                    <h2 className="card-title">Please Pay for {service.item}</h2>
                    <p>Your order: <span className='text-orange-700'>{service.quantity}</span> at {service.price}</p>
                    <p>Please pay: ${service.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={service}>
                        <CheckoutForm service={service} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;