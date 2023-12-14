import React from 'react'
import HighlightedText from '../componets/core/HomePage/HighlightedText'
import Banner1 from '../assets/Images/aboutus1.webp'
import Banner2 from '../assets/Images/aboutus2.webp'
import Banner3 from '../assets/Images/aboutus3.webp'
import foundingStory from '../assets/Images/FoundingStory.png'
import LearningGrid from '../componets/core/AboutusPage.js/LearningGrid'
import Stats from '../componets/core/AboutusPage.js/Stats'
import ContactForm from '../componets/core/ContactPage/ContactForm'
import Footer from '../componets/common/Footer'

const About = () => {
    return (
        <div className=' text-white '>
            {/* section1 */}
            <section className=' bg-richblack-600 lg:pt-20 lg:pb-[16rem] relative'>
                <header className=' m-auto flex flex-col justify-center text-center text-4xl'>
                    <h1 className='font-bold'>
                        Online Innovation in Online Education for a
                    </h1>
                    <HighlightedText text={"Brighter Future"} />
                    <p className=' text-base mt-2 text-richblack-300'>
                        StudyNotioin is at the forefront of driving innovation in online Education. We're passionate about creating
                    </p>
                    <p className=' text-base text-richblack-300'>
                        a brighter future bt offering cutting-edge courses, leveraging emergency technologies, and nurrating a vibrant learning community.
                    </p>
                </header>
                <div className='absolute w-[100%]' >
                    <div className='flex gap-3 w-fit m-auto pt-7'>
                        <img src={Banner1} alt='about' />
                        <img src={Banner2} alt='about' />
                        <img src={Banner3} alt='about' />
                    </div>
                </div>
            </section>
            {/* section2 */}
            <section>
                <header className=' text-3xl font-semibold mt-[9rem] w-[80%] text-center m-auto'>
                    We are passionate about revolutionizing the way we learn. our innovative platform <HighlightedText text={"combines technology "} /> , <span className=' text-brown-200'> expertise </span>, and communication create an <span className=' text-brown-200'>unparalleled educational experience.</span>
                </header>
            </section>

            {/* section3 */}
            <section className=' flex flex-col w-[70%] justify-center flex-wrap mx-auto mt-32 mb-20 gap-32'>

                <div className='flex justify-between items-center'>
                    <div className='w-[45%] flex flex-col flex-wrap  gap-5'>

                        <h1 className='font-bold text-4xl text-brown-780'>Our Founding Story</h1>
                        <p className=' text-base  text-richblack-300'>
                            our e-learning platform was born out of a shared vision and passion for transforming Education. It will began with a group of educators, technologists , and literating learners who recognized the need fro accessible, flrxible and high quality learning opportunities in a rapidly evolving digital world
                        </p>
                        <p className=' text-base text-richblack-300 '>
                            As experienced eduactors ourseleves , we eitnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock full potential.
                        </p>
                    </div>
                    <div className='w-[45%]  flex-wrap'>
                        <img src={foundingStory} alt='img' />
                    </div>
                </div>

                <div className='flex justify-between items-center flex-wrap'>
                    <div className='w-[45%] flex flex-col gap-5 '>
                        <h1 className='font-bold text-4xl text-brown-780'>Our Vision</h1>
                        <p className=' text-base text-richblack-300'>
                            With this vision in mind, we set our on a journey to create an e-learning platform that would revolutionize the way people learnm Our team of dedicated experts worked tirelessly to develop a robust abd intutive platfoem that combimes cutting-edge technology with engaging contetnt, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>
                    <div className='w-[45%] flex flex-col gap-5 '>
                        <h1 className='font-bold text-4xl text-blue-25 '>Our Mission</h1>
                        <p className=' text-base text-richblack-300 '>
                            Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we faster this spirit of collabration through forum, live sessions, and networking opportunities.
                        </p>
                    </div>
                </div>
            </section>

            <Stats />

            {/* section4 */}
            <LearningGrid />

            {/* section5 */}
            <div className='flex flex-col justify-center w-fit mx-auto mt-32'>
                <h1 className=' text-4xl font-semibold text-center'>Get in Touch</h1>
                <p className=' text-richblack-500 text-center'>We'd love to hear from you. Please fill out this form.</p>
                <ContactForm  />

            </div>

            <Footer />
        </div>
    )
}

export default About