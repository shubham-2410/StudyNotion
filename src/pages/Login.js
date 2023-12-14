import React from 'react';
import FormTemplate from '../componets/core/SignUp Login/FormTemplate';
import image from '../assets/Images/login.webp';

const Login = () => {
  return (
    <div>
        <FormTemplate
            title="Welcome Back" 
            description1="Build skills for today , tommorow and beyond"
            description2="Education to future-proof your carrer"
            formType='Login'
            image={image}
        />
    </div>
  )
}

export default Login