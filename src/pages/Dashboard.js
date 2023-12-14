import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../componets/core/Dashboard.js/SideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const {user} = useSelector((state)=>state.profile);
  console.log("i am user : " , user)

  const {loading : profileLoading} = useSelector((state)=>state.profile);
  const {loading : authLoading} = useSelector((state)=>state.auth);

  if(profileLoading || authLoading){
    return(
      <div className='mt-10'>
        loading...
      </div>
    )
  }
  return (
    <div className=' text-white relative flex min-h-[clac(100vh-3.5rem)]'>
      <SideBar/>

      <div className=' h-[calc(100vh - 3.5rem)] overflow-auto w-full'>
        <div className=' mx-auto'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard