import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OTPInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { sentOtp, signUp } from '../services/operations/authAPI';
const VerifyEmail = () => {

    const { loading, signupData } = useSelector((state) => state.auth);
    console.log("..... verify ", signupData);
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate('/signup');
        }
    }, [])

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
        console.log("oyy" , signupData)
        dispatch(signUp(firstName, lastName, email, password, confirmPassword, accountType, otp, navigate));
    }
    return (
        <div className= 'flex text-white justify-center items-center border-2 border-white h-[93vh]'>
            {
                loading ? (<div></div>) :
                    (
                        <div>
                            <h1>Verify Email</h1>
                            <p>A verfication code has been sent you. Enter the code below.</p>
                            <form onSubmit={handleOnSubmit}>
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props}  placeholder='-'/>}
                                />
                                <button type='submit' >
                                    Verify Email
                                </button>
                            </form>

                            <div>
                                <div>
                                    <Link to={'/login'}>
                                        <p>Back to Login</p>
                                    </Link>
                                </div>
                                <div onClick={() => dispatch(sentOtp(signupData.email, navigate))}>
                                    Resend it
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default VerifyEmail