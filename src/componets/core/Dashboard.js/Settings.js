import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePhoto from './Settings/ProfilePhoto';
import ProfileInfo from './Settings/ProfileInfo';
import ProfilePassword from './Settings/ProfilePassword';
import AccountDelete from './Settings/AccountDelete';


const Settings = () => {


  const { user } = useSelector((state) => state.profile);

  console.log(user);

  return (
    <div className=' mb-20'>
      <div className='flex flex-col mx-auto h-full w-9/12 items-center gap-8 mt-10'>
        <header className='w-[90%] mx-auto font-bold text-3xl'>Edit Profile</header>

        <ProfilePhoto image={user.image} />
        <ProfileInfo user={user} />
        <ProfilePassword email={user.email}/>
        <AccountDelete />
      </div>


    </div>
  )
}

export default Settings