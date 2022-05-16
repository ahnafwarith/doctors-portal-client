import React from 'react';

const BookingModal = ({ treatment }) => {
    return (
        <section>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{treatment.name}</h3>
                    <p class="py-4">{treatment.slots[0]}</p>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn btn-primary">Book</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;