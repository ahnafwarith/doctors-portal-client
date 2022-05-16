import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <p className='text-center text-2xl text-secondary'>Available Appointments on {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;