import React from 'react'
import userImg from './media/images/userImg.svg';
function DashboardList ({ icon, title }) {
  return (
    <div
      style={{ boxShadow: '0px 1px 2px 0px #1018280D' }}
      className='border-[1px] mt-5 border-[#E8E8E8] rounded-xl bg-white pt-4 px-0 '
    >
      <div className='flex px-4'>
        <div>
          <img src={icon} alt='icon' />
        </div>
        <div className='mt-2 ml-2'>
          <h3 className='font-inter text-lg font-semibold text-[#101828]'>
            {title}
          </h3>
        </div>
        <span className='text-[#0086C9] text-base font-inter font-semibold ml-auto mt-2.5'>View all</span>
      </div>
      <div className='bg-[#F9FAFB] flex justify-between py-3 px-5'>
        <span className='text-[#262626] text-sm font-medium font-inter'>Name</span>
        <span className='text-[#262626] text-sm relative left-14 font-medium font-inter'>Specialty</span>
        <span className='text-[#262626] text-sm font-medium font-inter'>Registered Date</span>
      </div>


      
      <div className='flex  justify-between px-5 py-3 border-b-[1px] border-b-[#EAECF0]'>
        <div className='flex'>
        <div className='mt-2'>
          <img src={userImg} alt='UserImg' />
        </div>
        <div className='mt-4 ml-2'>
          <h3 className='font-inter text-base font-medium text-[#262626]'>{title}</h3>
        </div>
        </div>
        <div className='mt-4'>
        <span className='text-[#262626] text-sm font-normal font-inter'>Eye Doctor</span>
        </div>
        <div>
        <span className='text-[#262626] text-sm font-inter font-normal'>10-20-2024</span>
        <br />
        <span className='text-[#475467] text-sm font-inter font-normal'>10:55 AM</span>
        </div>
      </div>

      
      <div className='flex  justify-between px-5 py-3 border-b-[1px] border-b-[#EAECF0]'>
        <div className='flex'>
        <div className='mt-2'>
          <img src={userImg} alt='UserImg' />
        </div>
        <div className='mt-4 ml-2'>
          <h3 className='font-inter text-base font-medium text-[#262626]'>{title}</h3>
        </div>
        </div>
        <div className='mt-4'>
        <span className='text-[#262626] text-sm font-normal font-inter'>Eye Doctor</span>
        </div>
        <div>
        <span className='text-[#262626] text-sm font-inter font-normal'>10-20-2024</span>
        <br />
        <span className='text-[#475467] text-sm font-inter font-normal'>10:55 AM</span>
        </div>
      </div>

      
      <div className='flex  justify-between px-5 py-3 border-b-[1px] border-b-[#EAECF0]'>
        <div className='flex'>
        <div className='mt-2'>
          <img src={userImg} alt='UserImg' />
        </div>
        <div className='mt-4 ml-2'>
          <h3 className='font-inter text-base font-medium text-[#262626]'>{title}</h3>
        </div>
        </div>
        <div className='mt-4'>
        <span className='text-[#262626] text-sm font-normal font-inter'>Eye Doctor</span>
        </div>
        <div>
        <span className='text-[#262626] text-sm font-inter font-normal'>10-20-2024</span>
        <br />
        <span className='text-[#475467] text-sm font-inter font-normal'>10:55 AM</span>
        </div>
      </div>

    </div>
  )
}

export default DashboardList
