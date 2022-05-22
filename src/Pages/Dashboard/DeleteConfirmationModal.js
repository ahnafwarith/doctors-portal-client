import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ doctorDelete, refetch, setDoctorDelete }) => {
    const { name, email } = doctorDelete
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
                setDoctorDelete(null)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {name}?</h3>
                    <p class="py-4">Once Deleted you cannot undo</p>
                    <div class="modal-action">
                        <button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button>
                        <label for="delete-confirmation-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;