import React from 'react';
import { useSelector } from 'react-redux';
import { addCourseData } from '../../../../../data/addCourse';
import CourseInformation from './CourseInformation';

const RenderSteps = () => {

    const { step } = useSelector((state) => state.course);
    console.log('i am step', step);
    return (
        <div>

            <div className=' flex justify-between'>
                {
                    addCourseData.map((data) => (
                        <div key={data.id} className=' flex-col justify-center items-center'>
                            <p
                                className={`  w-fit mx-auto py-2 px-4  rounded-full border ${step === data.id
                                    ? 'text-yellow-400 border-yellow-400 bg-yellow-900'
                                    : 'border-none text-richblack-300 bg-richblack-700'
                                    }`}
                            >
                                {data.id}
                            </p>
                            <p className={`${step >= data.id ? 'text-richblack-50' : 'text-richblack-500'}`}>
                                {data.title}
                            </p>

                        </div>

                    ))
                }
            </div>

            {
                step === 1 &&
                <CourseInformation />
            }

        </div>
    )
}

export default RenderSteps