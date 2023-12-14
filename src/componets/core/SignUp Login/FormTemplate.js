import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import background from '../../../assets/Images/frame.png';
import HighlightedText from '../HomePage/HighlightedText';
import { FcGoogle } from 'react-icons/fc'


const FormTemplate = ({ title, description1, description2, formType, image }) => {
    return (
        <div className='flex text-white h-screen justify-center items-center gap-10 w-11/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <div className='text-white font-semibold text-[1.875rem]'>
                    {title}
                </div>
                <div className='text-[1rem] leading-[2rem] mt-4'>
                    <p className='text-white'>{description1}</p>
                    <HighlightedText text={description2} className='text-blue-100 italic' />
                </div>
                <div>
                    {
                        formType === 'Login'
                            ? <LoginForm />
                            : <SignUpForm />
                    }
                </div>

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[2px] bg-[#334155]'></div>
                    <p className=' bg-[#334155] font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-[#334155]'></div>
                </div>

                <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-white border border-[#334155] px-[12px] py-[8px] gap-x-2 mt-6 hover:scale-95 transition-all duration-200 '>
                    <FcGoogle />
                    <p>Continue with Google</p>
                </button>
            </div>
            <div className='relative '>
                <img src={background} alt='bg'
                    className=' '
                />
                <img src={image} alt='img' className='absolute -top-5 right-5' />
            </div>
        </div>
    )
}

export default FormTemplate 