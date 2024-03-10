import React from 'react';
import homeImg from '../../assets/home.png';
import Header from '../../layout/Header';

function HeroSection() {
  return (
    <div className='h-screen relative'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundSize: 'cover',
          position: 'absolute',
          zIndex: '-1',
        }}
      ></div>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <Header />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <h1 className='font-poppins text-7xl font-semibold mb-4'>ZoomOrder</h1>
        <p className='font-poppins text-4xl font-normal text-center'>
          Find the best restaurants, cafés <br /> and bars in India
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
