import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user]);
    

    return (
        <div>
        <h1> my orders: {orders.length}</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>quantity</th>
                        <th>Payment</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr key={a._id}> 
                            <th>{index + 1}</th>
                            <td>{a.displayName}</td>
                            <td>{a.email}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                            {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                            {(a.price && !a.paid) && <div>
                                <p><span className='text-success'>Paid</span></p>
                                <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                            </div>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;