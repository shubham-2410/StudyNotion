import React from 'react'

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    return (
        <div className={`p-6 flex flex-col gap-3 flex-wrap w-[25%]
    ${currentCard === cardData.heading ? "bg-richblack-5 text-richblack-200 shadow-yellow-100 shadow-[10px_10px_0px_0px]"
                : " text-richblack-200 bg-richblack-800 "
            }`}
            onClick={() => { setCurrentCard(cardData.heading) }}
        >
            <h1 className={` text-lg font-semibold
           ${currentCard === cardData.heading ? "text-black" : "text-richblack-5"
                } 
        `}>
                {cardData.heading}
            </h1>
            <p className=' font-inter'>
                {cardData.description}
            </p>
            <div className={`flex justify-between border-t-2 border-dashed pt-2 border-black
            ${currentCard === cardData.heading ? "text-blue-300" : "text-richblack-200"}
        `}>
                <p>{cardData.level}</p>
                <p>{cardData.lessionNumber} Lessons</p>
            </div>
        </div>
    )
}

export default CourseCard