import React from 'react'
import { useNavigate } from 'react-router-dom';


const Button = ({ children }) => {

  const navigate = useNavigate();
  return (

    <div className=' flex gap-3 w-[100%] justify-end mt-3'>

      <div onClick={()=>navigate("/dashboard/my-profile")}
        className='bg-richblack-700 text-center text-[13px] px-4 py-2 rounded-md font-bold cursor-pointer'>
        Cancel
      </div>

      <button className={`text-center text-[13px] px-4 py-2 rounded-md font-bold cursor-pointer 
       bg-yellow-50 text-black hover:scale-95 transition-all duration-200` }
      >
        {children}
      </button>

    </div>
  );
}

export default Button;