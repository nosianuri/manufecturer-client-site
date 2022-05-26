import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li className='font-bold'><Link to='/dashboard/admin'>Make Admin</Link></li>
                    {/* { admin && <>
                        <li><Link to='/dashboard/users'>Manage Order</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a product</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage product</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;