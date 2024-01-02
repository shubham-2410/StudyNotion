import React from 'react'
import Button from './Button';

const ProfilePhoto = ({image}) => {
    return (
        <div className='w-[90%] flex p-5 gap-6 items-center bg-richblack-800  rounded-lg'>
            <div>
                <img src={image} alt='Profile Pic' className=' aspect-square w-[60px] rounded-full object-cover'></img>
            </div>
            <div className=' flex  flex-col gap-2'>
                <p>Change Profile Picture</p>
                <Button linkto={"/"}>Upload</Button>
            </div>
        </div>
    )
}

export default ProfilePhoto