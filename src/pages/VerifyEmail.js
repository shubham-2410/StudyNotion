import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OTPInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { sentOtp, signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {
    const { loading, signupData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate('/signup');
        }
    }, []);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
        } = signupData;
        dispatch(signUp(firstName, lastName, email, password, confirmPassword, accountType, otp, navigate));
    };

    return (
        <div className="flex text-white justify-center items-center h-[90vh] bg-gray-900">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="text-center bg-richblack-700 py-20 rounded-md">
                    <h1 className="text-3xl font-bold mb-4  text-richblack-900">Verify Email</h1>
                    <p className=" mb-4 w-[90%] mx-auto text-richblack-900 text-xl  font-semibold">A verification code has been sent to you. Enter the code below.</p>
                    <form onSubmit={handleOnSubmit} className="mb-4 flex flex-col gap-3 justify-center items-center text-richblack-500">
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            inputStyle="w-12 h-12 text-3xl border border-white rounded-md mx-1 text-center"
                            renderInput={(inputProps, index) => (
                                <input
                                    {...inputProps}
                                    key={index}
                                    className="custom-input-style"
                                />
                            )}
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Verify Email
                        </button>
                    </form>

                    <div className="flex justify-center items-center">
                        <Link to="/login" className="text-blue-500 mr-4 hover:underline">
                            Back to Login
                        </Link>
                        <div className="text-blue-500 cursor-pointer hover:underline" onClick={() => dispatch(sentOtp(signupData.email, navigate))}>
                            Resend it
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
