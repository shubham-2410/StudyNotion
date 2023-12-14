import React from 'react'
import HighlightedText from './HighlightedText'
import knowYourProgress from '../../../assets/Images/Know_your_progress.png'
import compareYourProgress from '../../../assets/Images/Compare_with_others.png'
import planYourLesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='flex flex-col gap-5 w-11/12 mx-auto  mt-[130px] items-center mb-32'>
      <div className='text-4xl font-semibold text-center'>
        Your Swiss Knife for
        <HighlightedText text={" Learning any Language"}></HighlightedText>
      </div>

      <div className=' text-richblack-600 text-center text-base'>
        <p>Using spin making learing multiple language easy. With 20+ languages realistic voice over,</p>
        <p>progress tracking , system schedule and more.</p>
      </div>

      <div className='flex items-center justify-center mt-5 '>
        <img src={knowYourProgress} alt='learnigSectionImage'
          className=' object-contain -mr-32'
        />
        <img src={compareYourProgress} alt='learnigSectionImage'
          className=' object-contain '
        />
        <img src={planYourLesson} alt='learnigSectionImage'
          className=' object-contain -ml-36'
        />
      </div>

      <div className='w-fit'>
        <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection