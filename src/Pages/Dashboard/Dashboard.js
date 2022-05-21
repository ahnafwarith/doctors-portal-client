import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h1 className='text-primary text-3xl my-4 text-center'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My reviews</Link></li>
                    <li><Link to='/dashboard/history'>My history</Link></li>
                    <li>{admin && <Link to='/dashboard/users'>All Users</Link>}</li>
                    <li>{admin && <Link to='/dashboard/addDoctor'>Add Doctors</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageDoctors'>Manage Doctors</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;