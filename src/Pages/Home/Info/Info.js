import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    const title = ['Opening Hours', 'Contact us now', 'Visit Our Location']
    const cardText = ['24/7', 'Brooklyn, NY 10036, United States', '+000 123 456789']
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard bg='bg-gradient-to-r from-secondary to-primary' title={title[0]} cardText={cardText[0]} img={clock}></InfoCard>
            <InfoCard bg='bg-gradient-to-r from-accent to-slate-500' title={title[1]} cardText={cardText[1]} img={phone}></InfoCard>
            <InfoCard bg='bg-gradient-to-r from-secondary to-primary' title={title[2]} cardText={cardText[2]} img={marker}></InfoCard>
        </div>
    );
};

export default Info;