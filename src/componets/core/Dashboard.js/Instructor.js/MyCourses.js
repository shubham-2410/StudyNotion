import React from 'react'
import CourseCard from './CourseCard'

const MyCourses = () => {
  return (
    <div className='w-[90%] mx-auto'>

        <h2> My Courses</h2>
        <div className=' flex mt-10 '>
            <p className='w-[70%]'>Courses</p>
            <div className=' flex gap-5 '>
                <p>Duration</p>
                <p>Price</p>
                <p>Action</p>
            </div>
        </div>

        <div>

            {/* map over each course */}
            <CourseCard/>

        </div>

    </div>
  )
}

export default MyCourses