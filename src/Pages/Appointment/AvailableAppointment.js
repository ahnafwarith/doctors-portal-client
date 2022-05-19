import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:4000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-center text-2xl text-secondary mb-6'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}>
                </BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;