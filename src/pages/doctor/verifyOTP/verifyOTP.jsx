import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtpImg from '../../../components/media/images/OtpImg.svg'
import MainTopBar from '../../../components/mainTopBar'

const OTPVerification = () => {
  // const navigate = useNavigate();

  // const handleVerify = (e) => {
  //   e.preventDefault();
  //   navigate('/personal-information');
  // };

  return (
    <>
      <MainTopBar />
      <div className='mt-10 bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <div className='p-5 bg-[#ffffffd1] rounded-3xl  w-full max-w-xl'>
          <img className='mx-auto' src={OtpImg} alt='logo' />
          <form>
            <div className='mb-4'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                Document ID
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Enter Patient Document ID'
              />
            </div>
            <div className='mb-6'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                OTP
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='e.g 123456'
              />
            </div>
            <Link to='/docter/pdf-data'>
              <button
                //  type="submit"
                className='w-full bg-[#0065A2] text-white text-base font-inter font-semibold py-2 rounded-md hover:bg-[#462ca3]'
              >
                Check Report
              </button>
            </Link>
          </form>
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
      </div>
    </>
  )
}

export default OTPVerification
