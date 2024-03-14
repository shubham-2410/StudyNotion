import React from 'react'

const CourseCard = () => {
  return (
    <div className='flex items-center my-5'>
        <div className='flex w-[70%]'>

            <img/>
            <div>
                <h4>title</h4>
                <p>Description</p>
                <p>Date</p>
                <p>Status</p>
            </div>

        </div>
        <div className='flex gap-5'>
            <p>time</p>
            <p>Price</p>
            <p>edit</p>
        </div>
    </div>
  )
}

export default CourseCard