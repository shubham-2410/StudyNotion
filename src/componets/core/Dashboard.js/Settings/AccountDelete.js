import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'

const AccountDelete = () => {
    return (
        <div className=' rounded-md bg-red-600 bg-opacity-20 w-[90%] flex  p-7 gap-5'>

            <div className=' bg-red-600  rounded-full h-fit p-5'>
                <RiDeleteBin5Line fontSize={50} fi />
            </div>
            <div>
                <p className=' font-bold font-inter text-lg mb-3'>Delete Account</p>
                <p className=' font-inter  text-richblack-100 font-semibold'>Would you like to delete account?</p>
                <p className=' text-richblack-300 font-semibold w-[60%]'>This account may contains paid courses. Deleting your account is permanent and will all contain associated with it.</p>

                <p className=' mt-3 italic text-red-600 opacity-70 font-semibold pb-1'><a className=' cursor-pointer hover:text-lg  hover:pb-0  transition-all duration-200'>I want to delete my account.</a></p>
            </div>

        </div>
    )
}

export default AccountDelete