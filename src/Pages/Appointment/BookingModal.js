import React from 'react';

const BookingModal = ({ treatment }) => {
    return (
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg">{treatment.name}</h3>
                <p class="py-4">{treatment.slots[0]}</p>
                <div class="modal-action">
                    <label for="booking-modal" class="btn">Yay!</label>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;