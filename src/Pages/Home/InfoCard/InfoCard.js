import React from 'react';

const InfoCard = ({ img, title, bg, cardText }) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bg}`}>
            <figure className='pl-4'><img src={img} /></figure>
            <div className="card-body">
                <h2 className="text-white text-xl">{title}</h2>
                <p className='text-white'>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;