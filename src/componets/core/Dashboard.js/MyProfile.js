import React from 'react'
import { useSelector } from 'react-redux'
import EditBtn from './EditBtn'

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile)
  console.log("inside my profile ", user)
  return (
    <div className=' text-white flex flex-col mx-auto h-full w-full items-center gap-8 mt-10'>

      <div className='w-[50%]'>
        <h1 className=' font-semibold text-3xl'>My Profile</h1>
      </div>

      {/* section1 */}
      <div className='flex justify-between items-center bg-richblack-800 rounded-md px-10 py-5 lg:w-[50%] flex-wrap'>
        <div className='flex  gap-5'>
          <img
            src={user?.image}
            alt='ProfilePic'
            className=' aspect-square w-[60px] rounded-full object-cover'
          />
          <div className=' flex flex-col justify-center'>
            <p className=' font-semibold text-2xl'>{user?.firstName} {user?.lastName}</p>
            <p className=' font-bold text-richblack-300'>{user?.email}</p>
          </div>
        </div>

        <EditBtn />
      </div>


      <div className='flex justify-between  bg-richblack-800 rounded-md px-10 py-5 lg:w-[50%] flex-wrap'>
        <div>
          <p className=' font-semibold text-2xl'>
            About
          </p>
          <p className=' font-bold text-richblack-300 mt-5'>
            {user?.profile.about ?? "Write Somrthing About Yourself"}
          </p>
        </div>

        <EditBtn />
      </div>


      <div className='flex justify-between  bg-richblack-800 rounded-md px-10 py-5 lg:w-[50%] flex-wrap'>
        <div className='flex justify-between w-full'>
          <p className=' font-semibold text-2xl mb-7'>
            Personal Details
          </p>
          <EditBtn />
        </div>
        <div className=' flex justify-between w-full'>

          <div className=' flex flex-col gap-5'>
            <div >
              <p className=' font-semibold text-richblack-300 text-sm'>
                First Name
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.firstName}
              </p>
            </div>

            <div >
              <p className=' font-semibold text-richblack-300 text-sm'>
                Email
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.email}
              </p>
            </div>

            <div >
              <p className=' font-semibold text-richblack-300 text-sm'>
                Gender
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.profile.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

          <div className=' flex flex-col gap-5'>
            <div>
              <p className=' font-semibold text-richblack-300 text-sm'>
                Last Name
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className=' font-semibold text-richblack-300 text-sm'>
                Phone Number
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.profile.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className=' font-semibold text-richblack-300 text-sm'>
                Date Of Birth
              </p>
              <p className=' font-semibold text-richblack-25 mt-2'>
                {user?.profile.dateOfBirth ?? "Add DOB"}
              </p>
            </div>
          </div>

          <div className=''>


          </div>
        </div>


      </div>
    </div>
  )
}

export default MyProfile