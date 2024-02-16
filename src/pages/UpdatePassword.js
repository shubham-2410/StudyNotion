import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { resetPassword } from '../services/operations/authAPI';

const UpdatePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { loading } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const onChangeHandler = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(formData.password, formData.confirmPassword, token, navigate));
    }

    return (
        <div className='bg-gray-900 min-h-[80vh] flex justify-center items-center'>
            <div className='bg-gray-800 p-8 rounded-md shadow-md text-white w-96'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <h1 className='text-2xl font-bold mb-4'>Choose New Password</h1>
                        <p className='mb-4'>Almost done. Enter your new password and you're all set.</p>
                        <form onSubmit={handleOnSubmit}>
                            <label className='block mb-4'>
                                <p className='text-gray-300 mb-1'>New Password:</p>
                                <div className='relative'>
                                    <input
                                        required
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={onChangeHandler}
                                        placeholder='Password'
                                        className='w-full px-4 py-2 rounded-md bg-gray-700 text-black outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <span className='absolute top-1/2 right-3 transform -translate-y-1/2 text-3xl'> 
                                        {!showPassword ? (
                                            <AiOutlineEyeInvisible className='text-gray-400 cursor-pointer fill-black' onClick={() => setShowPassword(!showPassword)} />
                                        ) : (
                                            <AiOutlineEye className='text-gray-400 cursor-pointer fill-black' onClick={() => setShowPassword(!showPassword)} />
                                        )}
                                    </span>
                                </div>
                            </label>
                            <label className='block mb-4'>
                                <p className='text-gray-300 mb-1'>Confirm Password:</p>
                                <div className='relative'>
                                    <input
                                        required
                                        name='confirmPassword'
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={onChangeHandler}
                                        placeholder='Confirm Password'
                                        className='w-full px-4 py-2 rounded-md bg-gray-700 text-black outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <span className='absolute top-1/2 right-3 transform -translate-y-1/2 text-3xl font-bold'>
                                        {!showConfirmPassword ? (
                                            <AiOutlineEyeInvisible className='text-gray-400 cursor-pointer fill-black' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                        ) : (
                                            <AiOutlineEye className='text-gray-400 cursor-pointer fill-black' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                        )}
                                    </span>
                                </div>
                            </label>
                            <button
                                type='submit'
                                className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            >
                                Reset Password
                            </button>
                        </form>
                        <div className='mt-4'>
                            <Link to='/login' className='text-blue-500 hover:underline'>Back to Login</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UpdatePassword;
