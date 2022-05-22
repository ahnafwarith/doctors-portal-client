import React from 'react';

const DoctorRow = ({ doctor, index, setDoctorDelete }) => {
    const { name, specialization, image } = doctor
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
            <td>
                <label onClick={() => setDoctorDelete(doctor)} for="delete-confirmation-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;