import React from 'react'

const ProfileInfo = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();


  return (
    <div>
      <p>Profile Information</p>

      <form onSubmit={handleSubmit()}>
        <div>
          {...register("First Name" ,{
            
          }) }
        </div>
      </form>

    </div>
  )
}

export default ProfileInfo