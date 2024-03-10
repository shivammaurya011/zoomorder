import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-gray-100 font-poppins py-4 px-10'>
      <div className='font-extrabold text-4xl font-serif'>
        ZoomOrder
      </div>
      <div className="flex justify-between py-6">
        <div>
          <h1 className='font-medium text-lg '>About</h1>
          <ul className='text-gray-500'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-lg '>Services</h1>
          <ul className='text-gray-500'>
            <li>Food Delivery</li>
            <li>Restaurant Booking</li>
            <li>Event Catering</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-lg '>Business</h1>
          <ul className='text-gray-500'>
            <li>Partner with Us</li>
            <li>Advertise</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-lg mb-6'>Social Links</h1>
          <div className="flex gap-2 text-xl">
            <FaFacebook className='text-gray-500 hover:text-gray-600'/>
            <FaTwitter className='text-gray-500 hover:text-gray-600'/>
            <FaInstagram className='text-gray-500 hover:text-gray-600'/>
            <FaYoutube className='text-gray-500 hover:text-gray-600'/>
          </div>
        </div>
      </div>
      <hr/>
      <div className='pt-6 text-lg'>
        &copy; 2024 ZoomOrder
      </div>
    </div>
  );
}

export default Footer;
