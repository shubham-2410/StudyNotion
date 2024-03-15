import React from 'react';
import RenderSteps from './RenderSteps';

const AddCourse = () => {

  return (
    <div
        className=' border-2 border-white mx-auto w-[90%] my-10 flex  justify-evenly'
    >
      
      <div>
        <h2>AddCourse</h2>
        <div>
          <RenderSteps/>
        </div>
      </div>

      <div className='w-[30%]'>
        <h3>Course Upload Tips</h3>
        <ul>
          <li>Set the course Price option or make it free</li>
          <li>Standard size for the course thumbnail is 1024*576</li>
          <li>Video section controls the course overview video</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>Add Topics in the course Builder section to create lessons, quizzes, and assignments.</li>
          <li>Make a Announcements to notify any important</li>
          <li>Notes ti all enrolled students at once</li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default AddCourse