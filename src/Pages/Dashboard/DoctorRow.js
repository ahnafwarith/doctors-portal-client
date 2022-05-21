import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialization, image, email } = doctor
    const handleDelete = () => {
        fetch(`http://localhost:4000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                toast.success('Doctor deleted')
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-12 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialization}</td>
            <td><button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;