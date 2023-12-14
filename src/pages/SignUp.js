import React from 'react';
import FormTemplate from '../componets/core/SignUp Login/FormTemplate';
import image from '../assets/Images/signup.webp';

const SignUp = () => {
  return (
    <div>
        <FormTemplate
            title="Join the millions learning to code with StudyNotion for free" 
            description1="Build skills for today , tommorow and beyond"
            description2="Education to future-proof your carrer"
            formType='SignUp'
            image={image}
        />
    </div>
  )
}

export default SignUp