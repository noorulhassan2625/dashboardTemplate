import React from 'react'
import ArrowUp from '../components/media/images/arrow-up.svg'
function DashboardBox ({ icon, title, totalData }) {
  return (
    <div
      style={{ boxShadow: '0px 1px 2px 0px #1018280D' }}
      className='border-[1px]  border-[#E8E8E8] rounded-xl bg-white p-4'
    >
      <div className='flex'>
        <div>
          <img src={icon} alt='icon' />
        </div>
        <div className='mt-2 ml-2'>
          <h3 className='font-inter text-base font-medium text-[#262626]'>{title}</h3>
        </div>
      </div>
      <div className='flex'>
        <p className='text-[#202020] font-semibold font-inter text-xl mt-2 '>{totalData}</p>
        <p className='flex ml-auto bg-[#ECFDF3] rounded-2xl px-3'><img src={ArrowUp} width={'20px'} alt='icon' /> <span className='mt-2 font-inter text-[#067647] text-sm'>100%</span> </p>
      </div>
    </div>
  )
}

export default DashboardBox
