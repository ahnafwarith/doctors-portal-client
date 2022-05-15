import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Windson Harry',
            review: 'forever grateful',
            img: person1
        },
        {
            _id: 2,
            name: 'Peter Parker',
            review: 'good service',
            img: person2
        },
        {
            _id: 3,
            name: 'Tony Stark',
            review: 'got healed fast',
            img: person3
        }
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2>What our Patients say</h2>
                </div>
                <div><img className='lg:w-48 w-24' src={quote} alt="" /></div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Testimonials;