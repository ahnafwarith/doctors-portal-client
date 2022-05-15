import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    return (
        <div className='my-28'>
            <div>
                <h3 className='text-primary font-bold text-xl uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;