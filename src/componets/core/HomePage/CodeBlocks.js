import React from 'react'
import CTAButton from './Button';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({ position , heading , subheading , ctabtn1 , ctabtn2 , codeblock , bgGradient , codeColor}) => {
  return (
    <div className={`flex ${position} my-20 gap-10 sm:flex-wrap sm:justify-center`}>
      <div className='flex flex-col w-[45%] gap-8 '>
        {heading}
        <div className=' text-richblack-300 font-bold'>
          {subheading}
        </div>
        <div className='flex gap-7 mt-4'>
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-x-2  items-center'>
              {ctabtn1.btntext}
              <AiOutlineArrowRight/>
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
              {ctabtn2.btntext}
          </CTAButton>
        </div>
      </div>

      <div className='flex lg:w-[500px]'>
        <div className='flex flex-col text-center text-richblack-300 font-inter font-bold w-[10%]'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
          <TypeAnimation
            sequence={[codeblock , 1000 , " "]}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true }
            style={
              {
                whiteSpace:"pre-line",
                display:"block"
              }
            }
          >

          </TypeAnimation>
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks