import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    if (user) {
        console.log(user)
    }

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-center text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'error message' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>

                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div className='divider'>Or</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;