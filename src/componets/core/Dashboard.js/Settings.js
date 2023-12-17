import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePhoto from './Settings/ProfilePhoto';


const Settings = () => {


    const {user} = useSelector ( (state) => state.profile );

    console.log(user);
    
  return (
    <div>

        <header>Edit Profile</header>

        <ProfilePhoto image={user.image}/>

        <div>


        </div>
        

    </div>
  )
}

export default Settings