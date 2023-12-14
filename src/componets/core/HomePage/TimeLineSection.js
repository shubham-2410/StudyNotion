import React from 'react';

import logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timelineimage from '../../../assets/Images/TimelineImage.png';

const timeLine = [
    {
        logo: logo1,
        heading: "LeaderShip",
        description: "Fully commited to success Company"
    },
    {
        logo: logo2,
        heading: "LeaderShip",
        description: "Fully commited to success Company"
    },
    {
        logo: logo3,
        heading: "LeaderShip",
        description: "Fully commited to success Company"
    },
    {
        logo: logo4,
        heading: "LeaderShip",
        description: "Fully commited to success Company"
    }
]

const TimeLineSection = () => {
    return (
        <div className='w-11/12 flex items-center justify-center mx-auto gap-x-15 '>
            <div className='flex flex-col gap-5 w-[30%]'>
                {
                    timeLine.map((element, index) => {
                        return (
                            <div key={index} className='flex gap-6 items-center'>
                                <div className='h-[50px] w-[50px] flex items-center justify-center bg-white rounded-full'><img src={element.logo} alt='logo' ></img></div>
                                <div>
                                    <div className=' font-semibold text-[18px]'>{element.heading}</div>
                                    <div className=' text-base'>{element.description}</div>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>

            <div className='relative shadow-blue-200'>
                <img src={timelineimage} alt='TimeLineImage'
                    className=' shadow-blue-200 h-fit'
                ></img>

                <div className=' absolute bg-caribbeangreen-700 text-white flex uppercase py-7
                     left-[50%] translate-x-[-50%] translate-y-[-50%]
                '>
                    <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className=' text-caribbeangreen-300 text-sm'>years of experience</p>
                    </div>
                    <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className=' text-caribbeangreen-300 text-sm'>Type of Courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLineSection