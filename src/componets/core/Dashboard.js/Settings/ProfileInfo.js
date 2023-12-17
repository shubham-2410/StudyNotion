import React from 'react'
import { useForm } from 'react-hook-form';
import Button from './Button';

const ProfileInfo = ({ user }) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();


  return (
    <div className='w-[90%] flex flex-col'>
      <div className='bg-richblack-800  rounded-lg p-8'>
        <p className=' font-bold font-inter text-lg'>Profile Information</p>

        <form onSubmit={handleSubmit()} className="w-full flex flex-wrap gap-5 my-5 items-center justify-center">

          <div className="flex gap-1 flex-col w-[45%]">
            <label htmlFor="firstName">User Name</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              {...register("firstName")}
              value={user.firstName}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
            </input>
          </div>

          <div className="flex gap-1 flex-col w-[45%]">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              {...register("lastName")}
              value={user.lastName}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
            </input>
          </div>

          <div className="flex gap-1 flex-col w-[45%]">

            <label htmlFor="dob">Date of Birth</label>
            <input
              name="dob"
              id="dob"
              type="date"
              {...register("dob")}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
            </input>
          </div>

          <div className="flex gap-1 flex-col w-[45%]">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              {...register("gender")}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex gap-1 flex-col w-[45%]">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              name="contactNumber"
              id="contactNumber"
              type="number"
              {...register("contactNumber")}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
            </input>
          </div>

          <div className="flex gap-1 flex-col w-[45%]">
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              {...register("about")}
              className="text-white rounded-md bg-richblack-400 py-2"
            >
              {/* rows="4" cols="50" */}

            </textarea>
          </div>
        </form>

      </div>
      <div className=' flex gap-3 w-full justify-end mt-8'>
        <Button active={false}>Cancel</Button>
        <Button active={true}>Save</Button>
      </div>
    </div>
  )
}

export default ProfileInfo