import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Breakfast from '../../assets/breakfast.png';
import Dinner from '../../assets/dinner.png';
import Drinks from '../../assets/drinks.png';

function Carousels() {
  return (
    <Carousel showThumbs={false} className='w-full'>
      <div className='h-40 sm:h-60 md:h-80'>
        <img src={Breakfast} alt='Breakfast' className='w-full h-full object-cover' />
      </div>
      <div className='h-40 sm:h-60 md:h-80'>
        <img src={Dinner} alt='Dinner' className='w-full h-full object-cover' />
      </div>
      <div className='h-40 sm:h-60 md:h-80'>
        <img src={Drinks} alt='Drinks' className='w-full h-full object-cover' />
      </div>
    </Carousel>
  );
}

export default Carousels;
