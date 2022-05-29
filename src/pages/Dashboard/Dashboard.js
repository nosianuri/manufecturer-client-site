import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary'>Welcome to our Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='font-bold'><Link to='/dashboard'>My Orders</Link></li>
                    <li className='font-bold'><Link to='/dashboard/review'>Add Reviews</Link></li>
                    <li className='font-bold'><Link to='/dashboard/profile'>My Profile</Link></li>
                    
                    { admin && <>
                        <li className='font-bold'><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                        <li className='font-bold'><Link to='/dashboard/addProduct'>Add a product</Link></li>
                        <li className='font-bold'><Link to='/dashboard/admin'>Make Admin</Link></li>
                        <li className='font-bold'><Link to='/dashboard/manageProduct'>Manage product</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;