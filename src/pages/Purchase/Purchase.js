import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/userServiceDetail';
import { toast } from 'react-toastify';

const Purchase = ({ setPurchase }) => {
    const [quantity, setQuantity] = useState(5);
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    const handleIncrement = () => {
        if (quantity < 50) {
            setQuantity(prevCount => prevCount + 1);
        }

    }

    const handleDecrement = () => {
        if (quantity > 5){
            setQuantity(prevCount => prevCount - 1);
        }
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
            <form onSubmit={handlePlaceOrder} >
                <div className="hero min-h-screen">

                    <div className="hero-content">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <div className="card-body">
                                <label className='text-3xl text-primary font-bold my-2'>
                                    Please Order
                                </label>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled />
                                </div>
                                <div className="form-control">

                                    <input className='w-100 mb-2' type="text" name='service' placeholder='service' />
                                </div>
                                <div>
                                <h4>Quantity: {quantity}</h4>
                                    <p ><FontAwesomeIcon onClick={handleIncrement} icon={faPlus}></FontAwesomeIcon>
                                        <FontAwesomeIcon onClick={handleDecrement} className=' pl-3' icon={faMinus}></FontAwesomeIcon></p>
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