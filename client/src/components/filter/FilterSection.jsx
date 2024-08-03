import React from 'react';

function FilterSection({ filters, onFilterChange }) {
  const handleLocationChange = (e) => {
    onFilterChange({ ...filters, location: e.target.value });
  };

  const handleCuisineChange = (e) => {
    const { value, checked } = e.target;
    const newCuisine = checked
      ? [...filters.cuisine, value]
      : filters.cuisine.filter(cuisine => cuisine !== value);
    onFilterChange({ ...filters, cuisine: newCuisine });
  };

  const handleCostChange = (e) => {
    onFilterChange({ ...filters, costForTwo: e.target.value });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sort: e.target.value });
  };

  return (
    <div className='w-[20%] p-4 text-blue-400 text-base border shadow-md'>
      <div>
        <h2 className='text-xl font-semibold text-blue-800 mb-2'>Filters</h2>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-800 font-medium'>Select Location</h3>
            <select className='outline-none border-2 border-blue-500 px-2 py-1 rounded-md' value={filters.location} onChange={handleLocationChange}>
              <option value="">All</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Ayodhya">Ayodhya</option>
              <option value="Akbarpur">Akbarpur</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-800 font-medium'>Cuisine</h3>
            <div className=''>
              {['North Indian', 'South Indian', 'Chinese', 'Fast Food', 'Street Food'].map(cuisine => (
                <div className='flex gap-2 items-center' key={cuisine}>
                  <input type="checkbox" value={cuisine} checked={filters.cuisine.includes(cuisine)} onChange={handleCuisineChange} className='h-4 w-4' />
                  <label htmlFor="">{cuisine}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-800 font-medium'>Cost For Two</h3>
            <div>
              {[
                { label: 'Less Than ₹500', value: 'less500' },
                { label: '₹500 To ₹1000', value: '500to1000' },
                { label: '₹1000 To ₹1500', value: '1000to1500' },
                { label: '₹1500 To ₹2000', value: '1500to2000' },
                { label: '₹2000+', value: '2000plus' }
              ].map(cost => (
                <div className='flex gap-2 items-center' key={cost.value}>
                  <input type="radio" name="costForTwo" value={cost.value} checked={filters.costForTwo === cost.value} onChange={handleCostChange} className='h-4 w-4 rounded-full' />
                  <label htmlFor="">{cost.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-semibold text-blue-800 my-2'>Sort</h2>
        <div>
          <div className='flex gap-2 items-center'>
            <input type="radio" name="sort" value="lowToHigh" checked={filters.sort === 'lowToHigh'} onChange={handleSortChange} className='h-4 w-4 rounded-full' />
            <label htmlFor="">Price low to high</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="radio" name="sort" value="highToLow" checked={filters.sort === 'highToLow'} onChange={handleSortChange} className='h-4 w-4 rounded-full' />
            <label htmlFor="">Price high to low</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
