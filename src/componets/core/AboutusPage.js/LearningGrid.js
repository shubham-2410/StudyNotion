import React from 'react'
import HighlightedText from '../HomePage/HighlightedText';
import Button from '../HomePage/Button';

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class learing for",
        highlightText: "Anyone , Anywhere",
        btnText: "Learn More",
        decription: "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuasl and organizations worldwide.",
        btnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        decription: "Save Time and money. The belajar curiculum is made to be easier to understand and in line which industry need",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        decription: "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuasl and organizations worldwide.",

    },
    {
        order: 3,
        heading: "Certifications",
        decription: "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuasl and organizations worldwide.",

    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        decription: "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuasl and organizations worldwide.",

    },
    {
        order: 5,
        heading: "Ready to Work",
        decription: "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuasl and organizations worldwide.",

    },

]

const LearningGrid = () => {
    return (
        <div className='w-[80%] mx-auto  mt-28'>
            <div className='grid grid-cols-1 lg:grid-cols-4 mb-10'>
                {
                    LearningGridArray.map((card, index) => {
                        return (
                            <div
                                key={index}
                                className={`${card.order % 2 === 1 ? " bg-richblack-600" : "bg-richblack-800"}
                                    ${card.order === 3 && "lg:col-start-2"}
                                    ${card.order < 0 && " bg-trasparent lg:col-span-2 lg:h-[280px] p-5"}`
                                }
                            >
                                {
                                    card.order < 0
                                        ? (
                                            <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                                                <h1 className=' text-4xl font-semibold'>{card.heading}
                                                    <HighlightedText text={card.highlightText} />
                                                </h1>
                                                <p className=' font-medium'>{card.decription}</p>

                                                <button className='w-fit mt-4'>
                                                    <Button active={true} linkto={card.btnLink}>
                                                        {card.btnText}
                                                    </Button>
                                                </button>
                                            </div>
                                        )
                                        : (
                                            <div className='lg:w-[90%] flex flex-col p-10 gap-3'>
                                                <h1 className=' text-2xl font-semibold'>
                                                    {card.heading}
                                                </h1>
                                                <p className=' font-medium'>
                                                    {card.decription}
                                                </p>
                                            </div>
                                        )
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default LearningGrid