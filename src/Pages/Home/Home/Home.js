import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import GetAppointment from '../GetAppointment/GetAppointment';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <GetAppointment></GetAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;