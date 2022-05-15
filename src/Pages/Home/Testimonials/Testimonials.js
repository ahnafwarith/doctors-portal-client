import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Windson Harry',
            review: 'Just awesome',
            location: 'los angeles',
            img: person1
        },
        {
            _id: 2,
            name: 'Wanda',
            review: 'Great service, now I will be a Mom',
            location: 'los angeles',
            img: person2
        },
        {
            _id: 3,
            name: 'Skyler',
            review: 'I want to talk to the manager!',
            location: 'los angeles',
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review key={review._id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Testimonials;