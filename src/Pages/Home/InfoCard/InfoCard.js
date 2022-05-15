import React from 'react';

const InfoCard = ({ img, title, bg, cardText }) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bg}`}>
            <figure className='pl-4'><img src={img} /></figure>
            <div class="card-body">
                <h2 class="text-white text-xl">{title}</h2>
                <p className='text-white'>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;