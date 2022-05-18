import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ?
                    <span>{slots[0]}</span> :
                    <span className='text-red-500'>Service Unavailable.</span>

                }</p>
                <p>{slots.length > 0 ?
                    <span>{slots.length} slots available</span> :
                    <span>Try another day? </span>
                }</p>
                <div className="card-actions justify-center mt-2">
                    <button></button>
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className="btn btn-primary text-white uppercase"
                        onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;