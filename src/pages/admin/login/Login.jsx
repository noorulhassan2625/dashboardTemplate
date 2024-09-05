import React from 'react'
import { Link } from 'react-router-dom'
import AdminLoginBg from '../../../components/media/images/AdminLoginBg.png'
import DashboardLogo from '../../../components/media/images/DashboardLogo.svg'

const Login = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${AdminLoginBg})` }}
    >
      <div className='p-5 bg-[#ffffffd1] rounded-3xl shadow-md w-full max-w-xl'>
        <img className='mx-auto' src={DashboardLogo} alt="logo" />
        <div className='my-3'>
          <h3 className='text-3xl text-[#262626] font-semibold font-inter'>Welcome Back!</h3>
          <p className='text-[#262626] text-sm font-light font-inter mt-1'>Sign in your account</p>
        </div>
        <form>
          <div className='mb-4'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Email *</label>
            <input
              type='email'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <div className='mb-6'>
            <label className='text-[#262626] text-sm font-semibold font-inter'>Password *</label>
            <input
              type='password'
              className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <Link to='/admin'>
            <button
              //  type="submit"
              className='w-full bg-[#0065A2] text-white text-base font-inter font-semibold py-2 rounded-md hover:bg-[#462ca3]'
            >
              Sign In
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
  )
}

export default Login
