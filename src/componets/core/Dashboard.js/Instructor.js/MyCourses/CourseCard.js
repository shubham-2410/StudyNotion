import React from 'react'

const CourseCard = ({course}) => {

  console.log("I am here" , course);
  return (
    <div className='flex items-center my-5'>
        <div className='flex w-[70%]'>

            <img src={course.image} alt='thumbnail' />
            <div>
                <h4>{course?.name}</h4>
                <p>{course?.desciotion}</p>
                <p>Date</p>
                <p>Status</p>
            </div>

        </div>
        <div className='flex gap-5'>
            <p>time</p>
            <p>{course?.price}</p>
            <p>edit</p>
        </div>
    </div>
  )
}

export default CourseCard