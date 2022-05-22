import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../Appointment/BookingModal';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [doctorDelete, setDoctorDelete] = useState(null);

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
                            doctors.map((doctor, index) =>
                                <DoctorRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    index={index}
                                    refetch={refetch}
                                    setDoctorDelete={setDoctorDelete}>
                                </DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                doctorDelete && <DeleteConfirmationModal
                    doctorDelete={doctorDelete}
                    setDoctorDelete={setDoctorDelete}
                    refetch={refetch}
                ></DeleteConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;