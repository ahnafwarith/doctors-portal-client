import React from 'react';
import baby from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner2 = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint unde porro reiciendis error magnam eum molestiae. Possimus totam perspiciatis quasi sunt reiciendis impedit. In libero magni saepe provident voluptate.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <img src={baby} className="max-w-lg rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner2;