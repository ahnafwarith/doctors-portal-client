import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    const formattedDate = format(date, 'PP')
    const handleSubmit = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        const bookingData = {
            treatmentId: treatment._id,
            treatmentName: treatment.name,
            price: treatment.price,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patientEmail: e.target.email.value,
            patientNumber: e.target.phone.value
        }
        fetch('http://localhost:4000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set at ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already appointment set at ${formattedDate} at ${slot}`)
                }
                setTreatment(null);
                refetch();
            })
    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-2 justify-items-center' onSubmit={handleSubmit}>
                        <input type="text" readOnly value={date} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ""} placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ""} placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="input input-bordered w-full max-w-xs btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;