import React, { useState } from 'react';
import avatar from '../../../components/media/images/Avatar.svg';
import MainTopBar from '../../../components/mainTopBar';
import { Link } from 'react-router-dom';

const PersonalInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <MainTopBar />
      <div className='mt-5 bg-cover bg-no-repeat bg-center flex items-center justify-center'>
        <div className='px-52 py-1 bg-[#ffffffd1] rounded-3xl w-full max-w-screen-2xl'>
      <h3 className='text-[#0065A2] text-[40px] font-semibold font-inter'>Personal Information</h3>
      <hr className='py-2'></hr>
          <img
            className='mx-auto rounded-full w-32 h-32 object-cover'
            src={selectedImage || avatar}
            alt='avatar'
          />
          <div className='mx-auto text-center mt-2'>
            <label
              htmlFor='imageUpload'
              className='text-[#0065A2] text-lg font-medium font-montserrat cursor-pointer'
            >
              Upload Image
            </label>
            <input
              id='imageUpload'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleImageChange}
            />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='mb-4'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                Name
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Enter Name'
              />
            </div>
            <div className='mb-4'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                Email
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Enter Email'
              />
            </div>
            <div className='mb-4'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                Phone
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Enter Phone'
              />
            </div>
            <div className='mb-4'>
              <label className='text-[#262626] text-sm font-semibold font-inter'>
                Speciality
              </label>
              <input
                type='text'
                className='w-full adminFields mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Enter Speciality'
              />
            </div>
          </div>
          <button className='bg-[#0065A2] px-5 mt-3 float-end py-3 rounded-lg text-base font-semibold font-inter text-white '>
            Save Changes
          </button>
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
  );
};

export default PersonalInformation;
