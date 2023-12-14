import React from 'react'

const statistics = [
    {
        value: "5K",
        title: "Active Student",
    },
    {
        value: "10+",
        title: "Mentors",
    },
    {
        value: "200+",
        title: "Courses",
    },
    {
        value: "20+",
        title: "Awards",
    },
]
const Stats = () => {
    return (
        <div className='flex justify-center bg-richblack-600 mt-10'>
            {
                statistics.map((stat, index) => {
                    return (
                        <div className=' text-center px-20 py-5' key={index}>
                            <h1 className=' text-4xl font-bold'>
                                {stat.value}
                            </h1>
                            <p className='text-base  text-richblack-300'>
                                {stat.title}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Stats