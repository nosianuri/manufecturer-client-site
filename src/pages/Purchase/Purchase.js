import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/userServiceDetail';
import { toast } from 'react-toastify';

const Purchase = ({Purchase, setPurchase}) => {
    // const { name, description, quantity, price} = Purchase;
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    const handlePlaceOrder = event => {
        event.preventDefault();
        ;
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        fetch('https://thawing-depths-15200.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast('Your Order is done');
                }
                setPurchase();
                setService();
            })

    }

    return (
        <div>
            <h2 className="text-2xl text-center">Please Order: {serviceId}</h2>
            <form onSubmit={handlePlaceOrder} >
                <div className="hero min-h-screen">

                    <div className="hero-content">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <div className="card-body">
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" value={service} name='service' placeholder='service' required readOnly />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Purchase;