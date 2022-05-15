import React from 'react';
import Service from '../Service/Service';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        { _id: 1, pic: flouride, title: 'Flouride Treatment' },
        { _id: 2, pic: cavity, title: 'Cavity Filling' },
        { _id: 3, pic: whitening, title: 'Teeth Whitening' }
    ]
    return (
        <div className='my-28'>
            <div>
                <h3 className='text-primary font-bold text-xl uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;