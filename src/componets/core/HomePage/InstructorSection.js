import React from 'react'
import instructor from '../../../assets/Images/Instructor.png';
import HighlightedText from './HighlightedText';
import CTAButton from './Button';
import { AiOutlineArrowRight } from 'react-icons/ai';

const InstructorSection = () => {
    return (
        <div className='mt-16'>
            <div className='flex items-center '>
                <div className='w-[50%]'>
                    <img src={instructor} alt='instructorImg'></img>
                </div>
                <div className='w-[50%]  flex flex-col gap-5'>
                    <div className='text-4xl  font-semibold w-[50%]'>Become an
                        <HighlightedText text={" Instructor"} />
                    </div>

                    <p className=' font-medium text-[16px] text-richblack-300 w-[70%]'>
                        Instructor form around the world teach Million of students in StudyNotion. We provide tools and skills to teach what you Love.
                    </p>

                    <div className='w-fit'> 
                    <CTAButton active={true} linkto={'/signup'}>
                        <div className='flex gap-x-4 items-center'>
                            Start Teaching Today
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </CTAButton>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default InstructorSection