import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { deleteAccount } from '../../../../services/operations/profile';
import {useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const AccountDelete = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deleteHandle=async()=>{
        try {
            dispatch(deleteAccount(navigate));
        } 
        catch (error) {
            
        }
    }
    return (
        <div className=' rounded-md bg-red-600 bg-opacity-20 w-[90%] flex  p-7 gap-5'>

            <div className=' bg-red-600  rounded-full h-fit p-5'>
                <RiDeleteBin5Line fontSize={50} />
            </div>
            <div>
                <p className=' font-bold font-inter text-lg mb-3'>Delete Account</p>
                <p className=' font-inter  text-richblack-100 font-semibold'>Would you like to delete account?</p>
                <p className=' text-richblack-300 font-semibold w-[60%]'>This account may contains paid courses. Deleting your account is permanent and will all contain associated with it.</p>

                <p className=' mt-3 italic text-red-600 opacity-70 font-semibold pb-1'><span onClick={()=>deleteHandle()} className=' cursor-pointer hover:text-lg  hover:pb-0  transition-all duration-200'>I want to delete my account.</span></p>
            </div>

        </div>
    )
}

export default AccountDelete