import React, { useState } from 'react';

import {HomePageExplore} from '../../../data/homepage-explore';
import HighlightedText from './HighlightedText';
import CourseCard from './CourseCard';

const tabNames =[
    "Free",
    "New to coding",
    "Most popular",
    "Skills path",
    "Career paths"
]

const ExploreMore = () => {

    const [currentTab , setCurrentTab] = useState(tabNames[0]);
    const [courses , setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard , setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCard = (value)=>{
        console.log("clicked for" , value);
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=>course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
  return (
    <div className='pb-28 relative'>
        <div className=' text-4xl font-semibold text-center'>
            Unlock the <HighlightedText text={" Power of Code"}/>
        </div>

        <p className=' text-center text-richblack-300 text-lg mt-3  '>
            Learn to build anything you can images
        </p> 

        <div className='flex rounded-full justify-center items-center  w-fit mx-auto bg-richblack-800 mt-8 p-2 mb-32'>
            {
                tabNames.map((element , index)=>{
                    return(
                        <div key={index} 
                            className={`text-[16px] 
                            ${currentTab === element 
                                ?"bg-richblack-900 text-richblack-25 font-medium"
                                :" text-richblack-200"} 
                            rounded-full transition-all duration-200 
                            hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 cursor-pointer`}
                            onClick={()=>setMyCard(element)} 
                        >
                            {element}
                        </div>
                    );
                })
            }
        </div>

            {/* course cards */}
        <div className='absolute flex flex-row gap-10 justify-center px-14 top-[60%]'>
            {
                courses.map((element,index)=>{
                    console.log(element.heading , index)
                    return(
                        <CourseCard
                            key={index}
                            cardData={element}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    );
                })
            }
        </div>

        <div></div>
    </div>
  )
}

export default ExploreMore