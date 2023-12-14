import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { sentOtp } from "../../../services/operations/authAPI";

const SignUpForm = () => {

    const [accountType, setAccountType] = useState("Student");
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {signupData} = useSelector((state)=>state.auth);
    const handleOnSubmit =async(event)=> {
        event.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password not Match with Confirm password");
            return;
        }

        try{
            const {firstName , lastName , email , password , confirmPassword} = formData;
            dispatch(setSignupData({accountType ,firstName ,lastName , email , password , confirmPassword}));
            
            console.log("Signup Data is here..." , signupData)
            console.log("form data ", formData);

            dispatch(sentOtp(email , navigate));

            // navigate('/verify-email');
        }
        catch(error){
            toast.error("SignUp error");
            console.log("SignUp error .." , error);
        }
        
    }

    function eyePassword() {
        setShowPassword((prev) => !prev);
    }

    function eyeConfirmPassword() {
        setShowConfirmPassword((prev) => !prev);
    }

    return (
        <div>
            <div className="flex bg-[#1e293b] p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={() => { setAccountType("Student") }}
                    className={`${accountType === "Student" ? "bg-black text-white" : "bg-transparent text-richblack-100"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>

                <button onClick={() => { setAccountType("Instructor") }}
                    className={`${accountType === "Instructor" ? "bg-black text-white" : "bg-transparent text-richblack-100 "} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>
            <form onSubmit={handleOnSubmit} className="flex flex-col w-full">
                <div className="flex gap-x-10 ">
                    <label>
                        <p className="text-[0.875rem]  mb-1 text-white ">First Name <sup className="text-red-600 ">*</sup></p>

                        <input required type="text" name="firstName" value={formData.firstName} placeholder="Enter your first name"
                            onChange={changeHandler}
                            className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] " />
                    </label>

                    <label>
                        <p className="text-[0.875rem] mb-1 text-white  leading-[1.375rem]" >Last Name
                            <sup className="text-red-600 ">*</sup></p>

                        <input required type="text" name="lastName" value={formData.lastName} placeholder="Enter your last name"
                            onChange={changeHandler}
                            className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] " />
                    </label>
                </div>

                <div>
                    <label>
                        <p className="text-[0.875rem] mb-1 text-white leading-[1.375rem]">Email
                            <sup className="text-red-600 ">*</sup></p>
                        <input required type="email" name="email" value={formData.email} placeholder="Enter your email"
                            onChange={changeHandler}
                            className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] " />
                    </label>
                </div>

                <div className=" flex gap-x-10">
                    <label className="relative">
                        <p className="text-[0.875rem] mb-1 text-white leading-[1.375rem]">Password<sup className=" text-red-600">*</sup></p>
                        <input required type={showPassword ? "text" : "password"} name="password" value={formData.password}
                            placeholder="Create Password" onChange={changeHandler}
                            className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] " />

                        <span onClick={eyePassword} className="absolute right-1 top-10">
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </label>

                    <label className="relative">
                        <p className="text-[0.875rem] mb-1 text-white leading-[1.375rem]">Confirm Password
                            <sup className="text-red-600 ">*</sup></p>
                        <input required type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
                            value={formData.confirmPassword} placeholder="Confirm Password" onChange={changeHandler}
                            className="bg-[#1e293b] rounded-[0.5rem] text-white w-full p-[12px] " />

                        <span onClick={eyeConfirmPassword} className="absolute right-1 top-10">
                            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </label>
                </div>

                <button type="submit"
                    className=" bg-yellow-50 text-lg text-caribbeangreen-600 px-[12px] py-[8px] rounded-md mt-10 font-semibold hover:scale-95 transition-all duration-200 ">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignUpForm