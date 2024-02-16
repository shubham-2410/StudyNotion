import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
  const [emailSend, setEmailSend] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSend));
  }

  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
      <div className='bg-gray-800 p-8 rounded-md shadow-md'>
        {loading ? (
          <div className='text-white'>Loading...</div>
        ) : (
          <div>
            <h1 className='text-white text-2xl font-semibold mb-4'>
              {!emailSend ? "Reset Your Password" : "Check Your Email"}
            </h1>
            <p className='text-white mb-4'>
              {!emailSend ? "Have no fear. We'll email your instructor to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`}
            </p>
            <form onSubmit={handleOnSubmit}>
              {!emailSend && (
                <label className='block mb-4'>
                  <p className='text-white mb-1'>Email Address <span className='text-red-500'>*</span></p>
                  <input 
                    required 
                    name='email' 
                    type='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    placeholder='Enter your email here'
                    className='w-full px-4 py-2 rounded-md bg-gray-700 text-black outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </label>
              )}
              <button 
                type='submit'
                className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {!emailSend ? "Reset Password" : "Resend Email"}
              </button>
              <div className='mt-4'>
                <Link to={'/login'} className='text-blue-500 hover:underline'>
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
