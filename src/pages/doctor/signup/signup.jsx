import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DoctorSideImg from '../../../components/media/images/DoctorSideImg.svg';
import DashboardLogo from '../../../components/media/images/DashboardLogo.svg'
const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/otp-verification');
  };

  return (
    <div className="min-h-screen">
      <div className='grid grid-cols-2 gap-4'>
      <div className='px-14 py-10 w-full max-w-xl'>
        <img className='mx-auto mb-5' src={DashboardLogo} alt="logo" />
        <div className='my-3'>
          <h3 className='text-3xl text-[#262626] font-semibold font-inter'>Create New Account</h3>
          <p className='text-[#262626] text-sm font-light font-inter mt-1'>Sign up now to check patients</p>
        </div>
        <form>
          <div className='mb-4'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Name *</label>
            <input
              type='email'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter Name'
            />
          </div>
          <div className='mb-4'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Email *</label>
            <input
              type='email'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter Email'
           />
          </div>
          <div className='mb-4'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Phone *</label>
            <input
              type='text'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter Email'
           />
          </div>
          <div className='mb-4'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Speciality *</label>
            <input
              type='text'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter Email'
           />
          </div>
          <div className='mb-6'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Password *</label>
            <input
              type='password'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <div className='mb-6'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Confirm Password *</label>
            <input
              type='password'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <Link to='#'>
            <button
              //  type="submit"
              className='w-full bg-[#0065A2] text-white text-base font-inter font-semibold py-2 rounded-md hover:bg-[#462ca3]'
            >
             Create Account
            </button>
          </Link>
        </form>
          {/* <div className='text-center mt-5'>
            <span className='text-[#0065A2] text-lg font-inter font-medium'>Forget password?</span>
          </div> */}
          <div className='text-center mt-5'>
            <p className='text-[#262626] text-lg font-medium font-inter'>Already have an account?
              <Link to={'/docter/signIn'}>
               <span  className='text-[#0065A2] text-lg font-inter font-medium'> Sign in Now</span>
              </Link>
               </p>
          </div>
      </div>
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          box-shadow: 0 0 0px 1000px #fff inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
        <div className="h-[auto] overflow-hidden rounded-b-[30px]">
          <img
            src={DoctorSideImg}
            alt="sideImg"
            className="w-full rounded-b-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
