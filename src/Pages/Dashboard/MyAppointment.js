import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user]);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
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
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;