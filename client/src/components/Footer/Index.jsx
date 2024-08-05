import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

function Index() {
  return (
    <div className="bg-gray-100 font-poppins py-4 px-6 md:px-10">
      <div className="font-extrabold text-3xl md:text-4xl font-serif text-center md:text-left">
        ZoomOrder
      </div>
      <div className="flex flex-col md:flex-row md:justify-between py-6">
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-lg text-center md:text-left">About</h1>
          <ul className="text-gray-500 text-center md:text-left">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-lg text-center md:text-left">Services</h1>
          <ul className="text-gray-500 text-center md:text-left">
            <li>Food Delivery</li>
            <li>Restaurant Booking</li>
            <li>Event Catering</li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-lg text-center md:text-left">Business</h1>
          <ul className="text-gray-500 text-center md:text-left">
            <li>Partner with Us</li>
            <li>Advertise</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-lg mb-6 text-center md:text-left">Social Links</h1>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <FaFacebook className="text-gray-500 hover:text-gray-600" />
            <FaTwitter className="text-gray-500 hover:text-gray-600" />
            <FaInstagram className="text-gray-500 hover:text-gray-600" />
            <FaYoutube className="text-gray-500 hover:text-gray-600" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-around items-center pt-6 text-lg text-center md:text-left">
        <span>&copy; 2024 ZoomOrder</span>
        <FaHeart className="text-red-500 hover:text-red-600 text-4xl my-2 md:my-0" />
        <span>Shivam Maurya</span>
      </div>
    </div>
  );
}

export default Index;
