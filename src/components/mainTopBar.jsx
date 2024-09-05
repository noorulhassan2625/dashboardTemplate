import React from 'react'
import DashboardLogo from './media/images/DashboardLogo.svg'
import ProfileBtnIcon from './media/images/profileBtnIcon.svg'
import { Link } from 'react-router-dom'

function MainTopBar () {
  return (
    <div className='flex p-5 shadow-sm'>
      <div>
        <img src={DashboardLogo} alt='logo' />
      </div>
      <div className='ml-auto mt-4'>
        <Link to={'/docter/personal-information'}>
          <button className='text-[#0065A2] text-base font-normal font-inter flex py-2 px-3 shadow-sm rounded-md'>
            <img src={ProfileBtnIcon} alt='logo' />{' '}
            <span className='ml-2'>Personal Info</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MainTopBar
