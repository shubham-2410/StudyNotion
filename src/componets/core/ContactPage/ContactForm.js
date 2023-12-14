import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CountryCode from '../../../data/countrycode.json';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: '',
        firstName: '',
        lastName: '',
        phoneNo: '',
        message: '',
        countryCode: '',
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitContactForm = async (data) => {
    console.log("logging data", data);
    try {
      setLoading(true);
      // You can add your form submission logic here

      toast.success("Form Submitted Successfully");
      setLoading(false);
    } catch (error) {
      console.log("error", error.message);
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-3 text-white w-fit p-10 rounded-lg '>
      
      <form onSubmit={handleSubmit(submitContactForm)}>
        <div className="w-[400px] mx-auto flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex gap-1 flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: "Please Enter First Name",
                })}
                className="text-white rounded-md bg-richblack-400 py-2"
                placeholder="First Name"
              />
              {errors.firstName && (
                <span className='text-brown-900'>{errors.firstName.message}</span>
              )}
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                {...register("lastName", {
                  required: "Please Enter Last Name",
                })}
                className="text-white rounded-md bg-richblack-400 py-2"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <span className='text-brown-900'>{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div className="flex gap-1 flex-col">
            <label htmlFor='email'>Email Address</label>
            <input
              name="email"
              id="email"
              type="email"
              {...register("email", {
                required: "Please Enter Email",
              })}
              className="text-white rounded-md bg-richblack-400 p-2"
              placeholder="Email Address"
            />
            {errors.email && <span className='text-brown-900'>{errors.email.message}</span>}
          </div>

          <div className="flex gap-1 flex-col">
            <label htmlFor='phoneNo'>Phone Number</label>
            <div className="flex gap-3">
              <select
                name="countryCode"
                id="countryCode"
                className=" w-[55px] text-white rounded-md bg-richblack-400 "
                {...register("countryCode", { required: true })}
              >
                {CountryCode.map((element, index) => (
                  <option
                    key={index}
                    value={element.code}
                    className="text-white bg-richblack-400"
                  >
                    {element.code}-{element.country}
                  </option>
                ))}
              </select>
              <div>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  className="text-white rounded-md bg-richblack-400 p-2 w-[80%]"
                  {...register("phoneNo", {
                    required: "Please enter Phone Number",
                    maxLength: {
                      value: 10,
                      message: "Invalid Phone Number",
                    },
                    minLength: {
                      value: 10,
                      message: "Invalid Phone Number",
                    },
                  })}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            {errors.phoneNo && (
              <div className='text-brown-900'>{errors.phoneNo.message}</div>
            )}
          </div>

          <div className="flex gap-1 flex-col">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              rows={7}
              cols={30}
              className="text-white flex flex-col rounded-md bg-richblack-400 p-2"
              {...register("message", {
                required: "Please Enter Message",
              })}
              placeholder="Your Message"
            />
            {errors.message && (
              <span className='text-brown-900'>{errors.message.message}</span>
            )}
          </div>

          <button className="rounded-md py-3 bg-yellow-50 text-center px-6 text-[16px] font-bold text-black w-[100%]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
