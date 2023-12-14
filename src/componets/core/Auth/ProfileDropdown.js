import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const { user } = useSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  console.log("open..", open)
  console.log("My image ..", user.image)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='relative '>
      <button onClick={() => setOpen(!open)}
        className='h-full mt-[2px]'
      >
        <div className=' flex items-center gap-x-1 h-full justify-center'>
          <img
            src={user?.image}
            alt='ProfilePic'
            className=' aspect-square w-[30px] rounded-full object-cover'
          />

          {
            open ? <AiOutlineCaretDown className=' text-sm text-richblue-100' />
              : <AiOutlineCaretUp className='text-sm text-richblue-100' />
          }
        </div>
      </button>
      {
        open &&
        <div className='absolute text-richblack-100 p-2 bg-richblack-600 flex flex-col 
          gap-2 rounded-md top-[3rem] right-[10%]  z-40'>
          <button onClick={() => {
            navigate("/dashboard/my-profile")
            setOpen(false);
          }}
            className=' flex gap-x-1 items-center hover:scale-110 hover:bg-richblack-700 w-full rounded-md p-2'
          >
            <MdOutlineSpaceDashboard />
            Dashboard
          </button>

          <button onClick={() => {
            dispatch(logout(navigate));
            setOpen(false);
          }} className=' flex gap-x-1 items-center hover:scale-110 hover:bg-richblack-700 w-full rounded-md p-2'>
            <FiLogOut />
            Logout
          </button>

        </div>
      }


    </div>
  )
}

export default ProfileDropdown