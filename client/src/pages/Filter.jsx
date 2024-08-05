import React, { useState, useEffect } from 'react';
import Layout from '../layout/Index';
import FilterSection from '../components/filter/FilterSection';
import ResultSection from '../components/filter/ResultSection';
import { restaurants as restaurantData } from '../data';

function Filter() {
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [filters, setFilters] = useState({
    location: '',
    cuisine: [],
    costForTwo: '',
    sort: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    let filteredRestaurants = restaurantData;

    if (filters.location) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.area.includes(filters.location)
      );
    }

    if (filters.cuisine.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        filters.cuisine.some(cuisine => restaurant.cuisine.includes(cuisine))
      );
    }

    if (filters.costForTwo) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => {
        const cost = restaurant.costForTwo;
        switch (filters.costForTwo) {
          case 'less500':
            return cost < 500;
          case '500to1000':
            return cost >= 500 && cost <= 1000;
          case '1000to1500':
            return cost >= 1000 && cost <= 1500;
          case '1500to2000':
            return cost >= 1500 && cost <= 2000;
          case '2000plus':
            return cost > 2000;
          default:
            return true;
        }
      });
    }

    if (filters.sort) {
      filteredRestaurants.sort((a, b) => {
        if (filters.sort === 'lowToHigh') {
          return a.costForTwo - b.costForTwo;
        } else if (filters.sort === 'highToLow') {
          return b.costForTwo - a.costForTwo;
        } else {
          return 0;
        }
      });
    }

    setRestaurants(filteredRestaurants);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRestaurants = restaurants.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row font-poppins gap-4 md:gap-[2%] py-6 md:py-8 px-4 md:px-[4%]">
        <FilterSection filters={filters} onFilterChange={handleFilterChange} />
        <ResultSection
          restaurants={paginatedRestaurants}
          currentPage={currentPage}
          totalPages={Math.ceil(restaurants.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
}

export default Filter;