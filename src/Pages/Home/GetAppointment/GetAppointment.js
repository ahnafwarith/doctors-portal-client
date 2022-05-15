import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const GetAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center my-24'>
            <div className='flex-1 hidden lg:block md:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-primary text-xl font-bold'>Appointment</h2>
                <h3 className='text-white text-3xl'>Make an Appointment Today</h3>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis aspernatur ex animi aut iusto, vitae tenetur? Asperiores reprehenderit, doloremque nemo quo officiis nisi rem fugit illo perspiciatis repellat saepe!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default GetAppointment;