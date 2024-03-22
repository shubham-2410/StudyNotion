import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesDetailsByInstructor } from '../../../../../services/operations/courseAPI';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  const dispatch = useDispatch();
  const { courseEntireData } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    try {
      const getData = async () => {
        if (courseEntireData.length == 0) {
          const data =await dispatch(getAllCoursesDetailsByInstructor());
        }
      }
      getData();
      setCourses(courseEntireData);
    } catch (error) {
      console.log('api error getAllCoursesDetailsByInstructor')
    }
  }, [courseEntireData]);



  return (
    <div className='w-[90%] mx-auto'>
      <h2> My Courses</h2>
      {courseEntireData.length > 0 ? (
        <>
          <div className='flex mt-10'>
            <p className='w-[70%]'>Courses</p>
            <div className='flex gap-5 '>
              <p>Duration</p>
              <p>Price</p>
              <p>Action</p>
            </div>
          </div>

          <div>
            {/* map over each course */}
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <p>No courses available</p>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
