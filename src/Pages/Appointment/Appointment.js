import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import CalendarBanner from './CalendarBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <CalendarBanner date={date} setDate={setDate}></CalendarBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;