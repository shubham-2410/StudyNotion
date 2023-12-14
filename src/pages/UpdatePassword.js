import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai';
import { resetPassword } from '../services/operations/authAPI';

const UpdatePassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        showPassword: "",
        password: "",
    })

    const onChangeHandler = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { password, confirmPassword } = formData;
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token , navigate));
    }
    return (
        <div className='text-white'>
            {
                loading
                    ? (<div></div>)
                    : (<div>
                        <h1>Choose New Password</h1>
                        <p>Almost done. Enter your new password and all youre set.</p>
                        <form onSubmit={handleOnSubmit}>
                            <label>
                                <p>New Password :</p>
                                <input
                                    required
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={onChangeHandler}
                                    placeholder='Password'
                                />
                                <span onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        !showPassword ? <AiOutlineEye fontSize={24} /> : <AiOutlineEyeInvisible fontSize={24} />
                                    }
                                </span>
                            </label>
                            <label>
                                <p>New Password :</p>
                                <input
                                    required
                                    name='confirmPassword'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={onChangeHandler}
                                    placeholder='Confirm Password'
                                />
                                <span onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                    {
                                        !showConfirmPassword ? <AiOutlineEye fontSize={24} /> : <AiOutlineEyeInvisible fontSize={24} />
                                    }
                                </span>
                            </label>
                            <button type='submit'>Reset Password</button>
                        </form>
                        <div>
                            <Link to={'/login'}>
                                <p>Back to Login</p>
                            </Link>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default UpdatePassword