import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:4000/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl my-2 text-center'>Manage Doctors</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor} index={index} refetch={refetch}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;