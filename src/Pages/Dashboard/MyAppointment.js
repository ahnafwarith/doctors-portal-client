import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                    }
                    else {

                    }
                    return res.json()
                })
                .then(data => setBookings(data))
        }
    }, [user]);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{b.patientName}</td>
                                    <td>{b.date}</td>
                                    <td>{b.slot}</td>
                                    <td>{b.treatmentName}</td>
                                    <td>{(b.price && !b.paid) &&
                                        <Link to={`/dashboard/payment/${b._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}</td>
                                    <td>{(b.price && b.paid) &&
                                        <span className='text-success'>Pay</span>}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;