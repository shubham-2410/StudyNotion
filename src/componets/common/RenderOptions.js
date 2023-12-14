import React from 'react'

const RenderOptions = ({title , options}) => {
  return (
    <div className=' text-richblack-300 mt-4  font-inter text-xs leading-7'>
      <h1 className=' text-richblack-100 text-lg font-medium'>{title}</h1>
      {
        options.map((option , index)=>{
          return (
            <p key={index} className='hover:text-richblack-100 hover:cursor-pointer'>{option.title}</p>
          );
        })
      }
    </div>
  )
}

export default RenderOptions;