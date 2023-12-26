import React, { useEffect, useState } from 'react'
import { getEnrolledCourses } from '../../../services/operations/profile';
import ProgressBar from '@ramonak/react-progress-bar';

const EnrolledCourses = () => {

  const [enrolledCourses, setGetEnrolledCourses] = useState(null);

  const getCourses = async () => {
    try {
      const response = await getEnrolledCourses();
      setGetEnrolledCourses(response);
    }
    catch (error) {
      console.log("Unable to fetch enrolled courses");
    }
  }

  useEffect(() => {
    getCourses();
  }, [])

  return (
    <div>
      <div>Enrolled Courses</div>
      {
        !enrolledCourses ? (
          <div>Loading...</div>
        ) : (
          !enrolledCourses.length ? <div>You are not enrolled in course yet!!</div>
            : (<div>
              <p>Course Name</p>
              <p>Duration</p>
              <p>Progress</p>

              <div>
                {
                  enrolledCourses.map((course, index) => (
                    <div key={index} >

                      <div>
                        <img src={course.thumbnail} alt='thumbnail' />
                        <div>
                          <p>{course.title}</p>
                          <p>{course.desciption}</p>
                        </div>
                      </div>

                      <div>{course.duration}</div>

                      <div>
                        <div>
                          <p>Progress:{course.progressPercentage || 0} %</p>
                          {enrolledCourses && (
                            <ProgressBar
                              completed={course.progressPercentage || 0}
                              height='8px'
                              isLabelVisible={false}
                            />
                          )}
                        </div>

                      </div>


                    </div>
                  ))
                }
              </div>
            </div>)
        )
      }
    </div>
  )
}

export default EnrolledCourses