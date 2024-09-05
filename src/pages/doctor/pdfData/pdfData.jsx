import React from 'react'
import MainTopBar from '../../../components/mainTopBar'
import { Link } from 'react-router-dom'

const PDFData = () => {
  return (
    <>
      <MainTopBar />
      <div className='grid grid-cols-3 gap-4'>
        <div className='user-data col-span-2 p-5'>
          <div className='flex'>
            <h3 className='text-3xl font-montserrat font-bold'>Report Data</h3>
            <Link className='float-end ml-auto'
              to={'https://lab.mlaw.gov.sg/files/Sample-filled-in-MR.pdf'}
            >
            <button className='text-[#0065A2] font-montserrat text-lg mt-3 '>
              View Report
            </button>
            </Link>
          </div>
          <div>
            <p className='text-[#262626] font-montserrat text-sm font-semibold'>
              Patient Name
            </p>
            <p className='text-[#262626] font-montserrat text-sm font-normal'>
              John Joe
            </p>
          </div>

          <div className='grid grid-cols-4 gap-4 mt-3'>
            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Patient Disease
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                Heart Problem
              </p>
            </div>

            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Disease Value
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                80%
              </p>
            </div>

            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Patient Disease
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                Heart Problem
              </p>
            </div>

            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Disease Value
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                80%
              </p>
            </div>

            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Patient Disease
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                Heart Problem
              </p>
            </div>

            <div>
              <p className='text-[#262626] font-montserrat text-sm font-semibold'>
                Disease Value
              </p>
              <p className='text-[#262626] font-montserrat text-sm font-normal'>
                80%
              </p>
            </div>
          </div>
          <p className='text-[#262626] font-montserrat text-sm font-normal my-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br></br>
            <br></br>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
         
        <div className='bg-[#F8F8F8] h-[100vh] fixed right-0 shadow-md p-5'>
          <h3 className='text-[#262626] text-2xl font-semibold font-inter'>
            Add Comments
          </h3>
          <textarea
            rows={8}
            className='w-full  bg-white rounded-lg p-4 mt-3'
            placeholder='Enter Comments'
          />
          <button className='bg-[#0065A2] px-14 mt-3 float-end py-3 rounded-lg text-base font-semibold font-inter text-white '>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default PDFData
