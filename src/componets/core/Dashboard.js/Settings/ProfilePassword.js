import React from 'react'
import { useForm } from 'react-hook-form';
import Button from './Button';

const ProfilePassword = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    return (
        <div className='w-[90%] flex flex-col' >
            <div className='bg-richblack-800  rounded-lg p-5'>
                <p className=' font-bold font-inter text-lg'>Password</p>

                <form className="w-full flex flex-wrap gap-5 mt-5 items-center justify-center">
                    <div className="flex gap-1 flex-col w-[45%]">
                        <label htmlFor='password'>Current Password</label>
                        <input
                            name='password'
                            id='password'
                            type='text'
                            {...register("password", {
                                required: "Please Enter New Password",
                            })}
                            className="text-white rounded-md bg-richblack-400 py-2"
                        >

                        </input>
                        {errors.userName && (
                            <span className='text-red-500'>{errors.password.message}</span>
                        )}
                    </div>
                    <div className="flex gap-1 flex-col w-[45%]">
                        <label htmlFor='newPassword'>New Password</label>
                        <input
                            name='newPassword'
                            id='newPassword'
                            type='text'
                            {...register("newPassword", {
                                required: "Please Enter New Password",
                            })}
                            className="text-white rounded-md bg-richblack-400 py-2"
                        >

                        </input>
                        {errors.userName && (
                            <span className='text-red-500'>{errors.newPassword.message}</span>
                        )}

                    </div>
                </form>
            </div>

            <div className='flex gap-3 w-full justify-end my-8'>
            <Button active={false}>Cancel</Button>
            <Button active={true}>Update</Button>
            </div>
        </div>
    )
}

export default ProfilePassword