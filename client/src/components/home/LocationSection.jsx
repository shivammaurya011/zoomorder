import React, { useState } from 'react';

function LocationSection() {
  const locations = [
    'Agra Restaurants', 'Ahmedabad Restaurants', 'Ajmer Restaurants', 'Alappuzha Restaurants', 'Allahabad Restaurants',
    'Amravati Restaurants', 'Amritsar Restaurants', 'Aurangabad Restaurants', 'Bengaluru Restaurants', 'Bhopal Restaurants',
    'Bhubaneswar Restaurants', 'Chandigarh Restaurants', 'Chennai Restaurants', 'Coimbatore Restaurants', 'Cuttack Restaurants',
    'Darjeeling Restaurants', 'Dehradun Restaurants', 'Delhi NCR Restaurants', 'Dharamshala Restaurants', 'Gangtok Restaurants',
    'Goa Restaurants', 'Gorakhpur Restaurants', 'Guntur Restaurants', 'Guwahati Restaurants', 'Gwalior Restaurants',
    'Haridwar Restaurants', 'Hyderabad Restaurants', 'Indore Restaurants', 'Jabalpur Restaurants', 'Jaipur Restaurants',
    'Jalandhar Restaurants', 'Jammu Restaurants', 'Jamnagar Restaurants', 'Jamshedpur Restaurants', 'Jhansi Restaurants',
    'Jodhpur Restaurants', 'Junagadh Restaurants', 'Kanpur Restaurants', 'Khajuraho Restaurants', 'Khamgaon Restaurants',
    'Kharagpur Restaurants', 'Kochi Restaurants', 'Kolhapur Restaurants', 'Kolkata Restaurants', 'Kota Restaurants',
    'Lucknow Restaurants', 'Ludhiana Restaurants', 'Madurai Restaurants', 'Manali Restaurants', 'Mangalore Restaurants',
    'Manipal Restaurants', 'Meerut Restaurants', 'Mumbai Restaurants', 'Mussoorie Restaurants', 'Mysore Restaurants',
    'Nagpur Restaurants', 'Nainital Restaurants', 'Nashik Restaurants', 'Neemrana Restaurants', 'Ooty Restaurants',
    'Palakkad Restaurants', 'Patiala Restaurants', 'Patna Restaurants', 'Puducherry Restaurants', 'Pune Restaurants',
    'Pushkar Restaurants', 'Raipur Restaurants', 'Rajkot Restaurants', 'Ranchi Restaurants', 'Rishikesh Restaurants',
    'Salem Restaurants', 'Shimla Restaurants', 'Siliguri Restaurants', 'Srinagar Restaurants', 'Surat Restaurants',
    'Thrissur Restaurants', 'Tirupati Restaurants', 'Trichy Restaurants', 'Trivandrum Restaurants', 'Udaipur Restaurants',
    'Vadodara Restaurants', 'Varanasi Restaurants', 'Vellore Restaurants', 'Vijayawada Restaurants',
  ];
  const [displayedLocations, setDisplayedLocations] = useState(locations.slice(0, 9));
  const [showAllLocations, setShowAllLocations] = useState(false);

  const handleViewMoreClick = () => {
    setDisplayedLocations(locations);
    setShowAllLocations(true);
  };

  return (
    <div className="p-8 font-poppins">
      <div className="mb-8 px-52 text-center">
        <h1 className="text-4xl mb-8 font-poppins font-medium">Popular locations in India</h1>
        <p className="text-gray-500 mb-10 text-xl font-normal">
          From swanky upscale restaurants to the coziest hidden gems serving the most incredible food, ZoomOrder covers it all. Explore menus and millions of restaurant photos and reviews from users just like you to find your next great meal.
        </p>
      </div>
      <div className='flex justify-around items-center flex-wrap'>
        {displayedLocations.map((location, index) => (
          <div key={index} className="group w-80 px-4 py-4 border-0 rounded-lg shadow shadow-gray-300/60 hover:shadow-gray-400/70 mb-10 flex items-center">
            <p className='text-xl font-normal text-gray-600 inline'>{location}</p>
            <p className='text-xl font-normal text-gray-600 ml-auto'>&gt;</p>
          </div>
        ))}
      </div>
      {!showAllLocations && (
        <div className="text-center mt-8">
          <button
            className="text-red-400 text-lg font-semibold hover:underline"
            onClick={handleViewMoreClick}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default LocationSection;