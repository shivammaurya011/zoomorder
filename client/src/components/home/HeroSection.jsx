import React from 'react';
import homeImg from '../../assets/home.png';
import { FaSearch } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className='h-screen relative font-poppins'>
      <div className='absolute inset-0 -z-10 bg-cover' style={{ backgroundImage: `url(${homeImg})` }}></div>
      <div className='absolute inset-0 bg-black bg-opacity-35 pointer-events-none'></div>
      <div className='absolute flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
        <div className='flex justify-center items-center font-semibold h-20 w-20 rounded-full bg-white'>
          <span className='text-red-500 text-5xl'>Z!</span>
        </div>
        <p className=' text-4xl font-normal text-white'>Find the best restaurants, cafés and bars in India</p>
        <div className='w-full h-10 flex flex-wrap font-medium items-center text-lg justify-between gap-4'>
          <select className='w-[28%] p-2 rounded-md text-gray-400 outline-none' name="" id="">
            <option value="">Select Location</option>
            <option value="">Select Location</option>
            <option value="">Select Location</option>
            <option value="">Select Location</option>
            <option value="">Select Location</option>
          </select>
          <div className='w-[68%] h-full flex justify-start items-center px-2 gap-2 rounded-md bg-white'>
            <FaSearch className='text-2xl font-thin text-gray-400'/>
            <input className='h-full outline-none w-[90%] text-gray-600 px-2' type="search" placeholder='Search for restaurants'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
