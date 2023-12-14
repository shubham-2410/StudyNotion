import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { useDispatch, useSelector } from 'react-redux';
import SideLinks from './SideLinks';
import { VscSignOut } from 'react-icons/vsc';
import ConfirmationModal from './ConfirmationModal';
import { logout } from '../../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const [confirmationModal, setConformationModal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.profile)
  return (
    <div className=' flex flex-col  gap-5 min-w-[222px] max-w-[222px] bg-richblack-800  min-h-[calc(100vh-3.5rem)] items-center'>
      <div className='mt-10 flex flex-col gap-3 text-2xl  font-inter w-full  text-richblack-25'>
        {
          sidebarLinks.map((link) => {
            if (link?.type && link?.type !== user?.accountType) {
              return null;
            }
            return <SideLinks key={link.id} link={link} />
          })
        }
      </div>
      <div className='h-[2px] bg-richblack-600 w-[90%] p-[0.5px]  '></div>

      <div className='mt-1 flex flex-col gap-3 text-2xl  font-inter w-full text-white'>

        <SideLinks
          link={{ name: "Settings", path: "/dashboard/settings", icon: "VscSettingsGear" }}
        />


        <button
          onClick={() => setConformationModal({
            text1: "Are You Sure?",
            text2: "You will be logged out of your Account",
            btn1Text: "Logout",
            btn2Text: "Cancel",
            btn1Handler: () => dispatch(logout(navigate)),
            btn2Handler: () => setConformationModal(null),
          })}
          className=' text-sm font-medium text-richblack-25'
        >
          <div className=' flex items-center gap-x-2 pl-10'>
            <VscSignOut className=' text-lg' />
            <span >Logout</span>

          </div>
        </button>
      </div>
      <div>

      </div>

      {
        confirmationModal && <ConfirmationModal modalData={confirmationModal} />
      }
    </div>

  )
}

export default SideBar