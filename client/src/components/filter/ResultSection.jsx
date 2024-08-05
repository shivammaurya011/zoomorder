import React from 'react';
import img from '../../assets/snacks.png';
import { useNavigate } from 'react-router-dom';

function ResultSection({ restaurants, currentPage, totalPages, onPageChange }) {
  const navigate = useNavigate()
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full md:w-[70%] flex flex-col justify-between gap-4 items-center h-full">
      <ul className="flex w-full gap-4 flex-col">
        {restaurants.map((restaurant, index) => (
          <li onClick={()=>navigate(`/details/${restaurant.id}`)} key={index} className="h-40 w-full border rounded-lg p-4 shadow-sm">
            <div className="flex gap-4">
              <img className="h-32 w-32 object-cover rounded-md" src={img} alt="restaurant" />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <p className="text-gray-600">{restaurant.locality}</p>
                  <p className="text-gray-600">{restaurant.area}</p>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col gap-1">
                  <span className="flex gap-2">
                    <p className="font-medium">Cuisine:</p>
                    <p className="text-gray-700">{restaurant.cuisine.join(", ")}</p>
                  </span>
                  <span className="flex gap-2">
                    <p className="font-medium">Cost For Two:</p>
                    <p className="text-gray-700">{restaurant.costForTwo}</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full">
        {totalPages > 1 && (
          <div className="flex text-lg text-gray-500 font-medium justify-center items-center gap-4 py-2 w-full rounded-lg">
            <span
              className="h-8 w-8 flex items-center justify-center border-2 border-gray-500 rounded-md pb-1 cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </span>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <span
                key={page}
                className={`h-8 w-8 flex items-center justify-center border-2 border-gray-500 rounded-md cursor-pointer ${
                  currentPage === page ? 'bg-gray-500 text-white' : ''
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            ))}
            <span
              className="h-8 w-8 flex items-center justify-center border-2 border-gray-500 rounded-md pb-1 cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultSection;