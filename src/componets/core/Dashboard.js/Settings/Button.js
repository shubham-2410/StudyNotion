import React from 'react'

const Button = ({children , active }) => {
  return (
      <div className={`text-center text-[13px] px-4 py-2 rounded-md font-bold cursor-pointer
        ${active? " bg-yellow-50 text-black " : "bg-richblack-700"}
        hover:scale-95 transition-all duration-200
       `}>
        {children}
      </div>
  );
}

export default Button;