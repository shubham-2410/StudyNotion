import React from 'react'
import Button from './Button';

const ProfilePhoto = ({image}) => {
    return (
        <div className='w-[90%] flex p-5 gap-6 items-center bg-richblack-800  rounded-lg'>
            <div>
                <img src={image} className=' aspect-square w-[60px] rounded-full object-cover'></img>
            </div>
            <div className=' flex  flex-col gap-2'>
                <p>Change Profile Picture</p>
                <div className=' flex gap-3'>
                    <Button active={false}>Select</Button>
                    <Button active={true}>Upload</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhoto