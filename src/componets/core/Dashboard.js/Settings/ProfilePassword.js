import React , {useEffect} from 'react'
import { useForm  } from 'react-hook-form';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { updatePassword } from '../../../../services/operations/profile';
import toast from 'react-hot-toast';

const ProfilePassword = ({email}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();


    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            password:'',
            newPassword:''
          });
        }
      }, [reset, isSubmitSuccessful]);
    
      const submitInfo = async (data) => {
        try {
            const {password , newPassword} = data;
            dispatch(updatePassword(email, password , newPassword , navigate));            
        } 
        catch (error) {
            console.log("Pass Update error " , error)
            toast.error("Pass update Error");
        }
      }

    return (
        <div className='w-[90%] flex flex-col' >
            <div className='bg-richblack-800  rounded-lg p-5'>
                <p className=' font-bold font-inter text-lg'>Password</p>

                <form onSubmit={handleSubmit(submitInfo)} className="w-full flex flex-wrap gap-5 mt-5 items-center justify-center">
                    <div className="flex gap-1 flex-col w-[45%]">
                        <label htmlFor='password'>Current Password</label>
                        <input
                            name='password'
                            id='password'
                            type='text'
                            {...register("password", {
                                required: "Please Enter Old Password",
                            })}
                            className="text-white rounded-md bg-richblack-400 py-2"
                        >

                        </input>
                        {errors.password && (
                            <span className='text-brown-780'>{errors.password.message}</span>
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
                        {errors.newPassword && (
                            <span className=' text-brown-780'>{errors.newPassword.message}</span>
                        )}

                    </div>

                    <Button>Update</Button>
                </form>
            </div>

        </div>
    )
}

export default ProfilePassword