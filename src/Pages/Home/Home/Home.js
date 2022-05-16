import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import GetAppointment from '../GetAppointment/GetAppointment';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Reach from '../Reach/Reach'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <GetAppointment></GetAppointment>
            <Testimonials></Testimonials>
            <Reach></Reach>
        </div>
    );
};

export default Home;