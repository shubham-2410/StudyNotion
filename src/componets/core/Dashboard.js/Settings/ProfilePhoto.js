import React from 'react'

const ProfilePhoto = ({image}) => {
    return (
        <div>
            <div>
                <img src={image} width={100}></img>
            </div>
            <div>
                <p>Change Profile Picture</p>
                <div>
                    <p>select</p>
                    <button>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhoto