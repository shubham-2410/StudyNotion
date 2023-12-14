import React from 'react'
import ContactForm from '../componets/core/ContactPage/ContactForm'

const Contact = () => {
  return (
    <div className='flex justify-center gap-8 flex-wrap'>
        <div className='flex flex-col gap-42 text-white h-fit mt-14 border-2  border-richblack-800  p-10 rounded-lg bg-richblack-800'>
            <div>
                <h1 className='bold'> Chat on us</h1>
                <p>Our friendly team is here to help</p>
                <p>info@studynotion.com</p>
            </div>
            <div>
                <h1 className='bold'>Visit Us</h1>
                <p>Come and say hello at our office HQ.</p>
                <p>Akshaya Nagar 1st Block, Banglore- 560016</p>
            </div>
            <div>
                <h1 className='bold'>Call Us</h1>
                <p>Mon - Fri Frim 8am to 5pm</p>
                <p>+123 456 7890</p>
            </div>
        </div>

        <div className='border-2  border-richblack-400 flex flex-col justify-center my-14 rounded-lg h-fit pt-10 px-10 '>
            <h1 className=' text-white text-3xl font-semibold text-center'>
                Got a Idea? We've got the Skills.
            </h1>
            <h1 className=' text-white text-3xl font-semibold text-center'>
            lets team up
            </h1>
            <p className=' text-richblack-500 text-center'>
                tell us more about yourself and what you're got in mind
            </p>
        <ContactForm/>

        </div>
    </div>
  )
}

export default Contact