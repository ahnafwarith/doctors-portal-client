import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        setTreatment(null)
        console.log(treatment._id, slot, treatment.name)
    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{treatment.name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-2 justify-items-center' onSubmit={handleSubmit}>
                        <input type="text" readOnly value={date} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" class="input input-bordered w-full max-w-xs btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;