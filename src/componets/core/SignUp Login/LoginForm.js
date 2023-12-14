
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../services/operations/authAPI";
function LoginForm() {

    const [formData, setFormData] = useState({
        password: "", email: ""
    });

    function changeHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    function eyePassword() {
        setShowPassword((prev) => !prev);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    function submitHandler(event) {
        event.preventDefault();
        console.log("login data ", formData);
        
        try{
            const {email , password } = formData;
            dispatch(login(email ,password , navigate));  
            console.log("I am Back")  
        }
        catch(error){
            toast.error("login error");
            console.log("login error .." , error);
        }
    }

    return (
        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email
                    <sup className="text-red-600 ">*</sup></p>
                <input required type="email" name="email" value={formData.email} placeholder="Enter your email"
                    onChange={changeHandler}
                    className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] "
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Password
                    <sup className="text-red-600">*</sup></p>

                <input type={showPassword ? "text" : "password"} name="password" value={formData.password}
                    placeholder="Create Password" onChange={changeHandler}
                    className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] "
                />

                <span onClick={eyePassword} className="absolute  right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
            </label>
            <Link to={'/forgot-password'}>
                <span className=" text-xs text-blue-25 cursor-pointer ml-auto max-w-max">Forgot Password</span>
            </Link>
            <button type="submit"
            className="bg-yellow-50 text-50  text-caribbeangreen-600 px-[12px] py-[8px] rounded-md font-semibold hover:scale-95 transition-all duration-200">
                login
            </button>
        </form>
    );
}

export default LoginForm;