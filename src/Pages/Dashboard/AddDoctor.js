import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // image storage key
    const imageStorageKey = `c62f94acae671750bd913d7cd164f314`

    // React query to load all the services name
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:4000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success === true) {
                    const doctorData = {
                        name: data.name,
                        email: data.email,
                        specialization: data.specialization,
                        image: result.data.url
                    }
                    // send doctorData to backend server
                    fetch('http://localhost:4000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorData)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset()
                            }
                            else {
                                toast.error('failed to add the doctor')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl mx-12'>Add a new doctor</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name validation*/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter doctor's name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* Email validation*/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter doctor's email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is a required field'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide an valid email address'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </label>
                    </div>
                    {/* Specialty validation */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialization</span>
                        </label>
                        <select {...register("specialization")} className="select w-full max-w-xs">
                            {
                                services.map(service =>
                                    <option key={service._id}
                                    >{service.name}</option>
                                )
                            }
                        </select>
                    </div>
                    {/* Image validation*/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            placeholder="Enter image"
                            className="input input-bordered w-full max-w-xs p-1"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Photo is a required field'
                                },
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                        </label>
                    </div>
                    <br></br>
                    <input className='btn w-full max-w-xs mt-4' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;