import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import HighlightedText from '../componets/core/HomePage/HighlightedText';
import CTAButton from '../componets/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../componets/core/HomePage/CodeBlocks';
import LearningLanguageSection from '../componets/core/HomePage/LearningLanguageSection';
import TimeLineSection from '../componets/core/HomePage/TimeLineSection';
import InstructorSection from '../componets/core/HomePage/InstructorSection';
import ExploreMore from '../componets/core/HomePage/ExploreMore';
import Footer from '../componets/common/Footer';
const Home = () => {
	return (
		<div className='relative flex flex-col items-center justify-between text-white  w-11/12  max-w-maxContent mx-auto '>
			{/* section1 */}
			<div>
				<NavLink to={"/signup"} >
					<div className='flex gap-x-2 items-center justify-center mx-auto bg-richblack-600  text-richblack-200  font-bold rounded-full transition-all duration-200  hover:scale-95 w-fit mt-16 p-2 px-10 hover:bg-richblack-800'>
						<p>Become an Instructor</p>
						<AiOutlineArrowRight></AiOutlineArrowRight>
					</div>
				</NavLink>

				<div className='text-center text-4xl  font-semibold  mt-8'>
					Empower Your Future with
					<HighlightedText text={" Coding Skills"}></HighlightedText>
				</div>

				<div className='w-[80%]  text-center  text-lg  font-bold text-richblack-300 m-auto mt-4'>
					with our online coding course , you can learn at your place , from anywhere in the world, and get access to resourses , get hands-on project , quizez and personalize feedback from Instructor.
				</div>

				<div className='flex mx-auto  items-center justify-center gap-7 mt-8'>
					<CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
					<CTAButton active={false} linkto={'/login'}>Book a Demo</CTAButton>
				</div>

				<div className=" shadow-blue-200 w-[80%] mx-auto my-8">
					<video muted autoPlay loop src={Banner} typeof='video/mp4'></video>
				</div>

				{/* code section1 */}

				<div className='w-[80%] mx-auto '>
					<CodeBlocks
						position={'lg:flex-row'}
						heading={
							<div className='text-3xl font-semibold'>
								Unlock your
								<HighlightedText text={' Coding Potential '} />
								with our online courses
							</div>
						}
						subheading={
							"Our courses are designed and taught by industry experts who have years of experience in coding and passionated about sharing there knowledge with you."
						}
						ctabtn1={
							{
								btntext: "Try it yourself",
								linkto: "/signup",
								active: 'true',
							}
						}
						ctabtn2={
							{
								btntext: "Learn More",
								linkto: "/login",
								// active:'false',
							}
						}
						codeblock={
							`<!DOCTYPE html>
							<html lang="en">
							<head>
								<meta charset="UTF-8">
								<meta name="viewport" content="width=device-width, initial-scale=1.0">
								<title>Document</title>
							</head>
							<body>
							</body>
							</html>`
						}

						codeColor={"text-yellow-25"}

					></CodeBlocks>
				</div>
				{/* code section2 */}
				<div className='w-[80%] mx-auto '>
					<CodeBlocks
						position={'lg:flex-row-reverse'}
						heading={
							<div className='text-3xl font-semibold'>
								Start
								<HighlightedText text={' coding in seconds '} />
							</div>
						}
						subheading={
							"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson"
						}
						ctabtn1={
							{
								btntext: "Try it yourself",
								linkto: "/signup",
								active: 'true',
							}
						}
						ctabtn2={
							{
								btntext: "Learn More",
								linkto: "/login",
								// active:'false',
							}
						}
						codeblock={
							`<!DOCTYPE html>
							<html lang="en">
							<head>
								<meta charset="UTF-8">
								<meta name="viewport" content="width=device-width, initial-scale=1.0">
								<title>Document</title>
							</head>
							<body>
							</body>
							</html>`
						}

						codeColor={"text-yellow-25"}

					></CodeBlocks>
				</div>

				{/* Unlock Power of code */}
				<ExploreMore/>
			</div>
			{/* section2 */}
			<div className=' bg-pure-greys-5 text-richblack-700'>
				<div className='homepage_bg h-[310px] w-screen flex items-center justify-center'>
					<div className='flex gap-7 text-white w-11/12 mx-auto justify-center'>
						<CTAButton active={true} linkto={'/signup'}>
							<div className='flex gap-2 items-center'>
								Explore full Catalog
								<AiOutlineArrowRight></AiOutlineArrowRight>
							</div>
						</CTAButton>
						<CTAButton active={false} linkto={'/signup'} > Learn More </CTAButton>
					</div>
				</div>

				<div className='w-11/12  mx-auto mt-[95px]  mb-10 '>
					<div className='flex gap-5  ml-24'>

						<div className='text-4xl font-semibold w-[40%] '>
							Get the Skills you need a
							<HighlightedText text={' Job that is in demand'}></HighlightedText>
						</div>
						<div className='flex flex-col w-[40%] items-start '>

							<div className='text-[16px] mb-[20px]'>
								The modern StudyNotion is the dictates its own term. Today to be a competitive specialist require more than professional skills
							</div>
							<CTAButton active={true} linkto={'signup'}> Learn More</CTAButton>
						</div>
					</div>

				</div>

				<TimeLineSection></TimeLineSection>
				<LearningLanguageSection></LearningLanguageSection>
			</div>

			{/* section3 */}
			<div className='flex w-11/12 mx-auto justify-center bg-richblack-900 gap-8 text-white flex-col'>

				<InstructorSection></InstructorSection>

				<h1>Review From Other learners</h1>
				<div>

				</div>

			</div>

			{/* footer */}
			<Footer/>
		</div>
	);
}

export default Home