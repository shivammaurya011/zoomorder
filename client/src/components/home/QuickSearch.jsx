import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breakfast from '../../assets/breakfast.png';
import Dinner from '../../assets/dinner.png';
import Drinks from '../../assets/drinks.png';
import Lunch from '../../assets/lunch.png';
import NightLife from '../../assets/nightlife.png';
import Snacks from '../../assets/snacks.png';

function QuickSearch() {
  const navigate = useNavigate();

  const meals = [
    {
      id: 1,
      category: 'Breakfast',
      description: 'Start your day with exclusive breakfast',
      imageUrl: Breakfast,
    },
    {
      id: 2,
      category: 'Launch',
      description: 'Start your day with exclusive Launch options',
      imageUrl: Lunch,
    },
    {
      id: 3,
      category: 'Snacks',
      description: 'Start your day with exclusive Snacks options',
      imageUrl: Snacks,
    },
    {
      id: 4,
      category: 'Dinner',
      description: 'Start your day with exclusive Dinner options',
      imageUrl: Dinner,
    },
    {
      id: 5,
      category: 'Drinks',
      description: 'Start your day with exclusive Drinks options',
      imageUrl: Drinks,
    },
    {
      id: 6,
      category: 'NightLife',
      description: 'Start your day with exclusive NightLife',
      imageUrl: NightLife,
    },
  ];

  return (
    <div className='py-8 px-4 md:px-24'>
      <h1 className='text-2xl md:text-4xl font-poppins text-blue-900 font-semibold'>Quick Searches</h1>
      <p className='text-base md:text-lg font-poppins text-gray-500'>Discover restaurants by type of meal</p>
      <ul className='flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6'>
        {meals.map((meal) => (
          <li
            key={meal.id}
            onClick={() => { console.log('nn'); navigate(`/filter/${meal.id}`); }}
            className='flex flex-col md:flex-row w-60 md:w-80 rounded-lg bg-white shadow shadow-gray-300/60 hover:shadow-gray-400/70 cursor-pointer'
          >
            <img className='h-40 w-full rounded-l-lg md:w-36 object-cover' src={meal.imageUrl} alt={meal.category} />
            <div className='py-2 px-4'>
              <h2 className='text-xl md:text-2xl font-poppins text-blue-900 font-semibold'>{meal.category}</h2>
              <p className='text-sm md:text-lg font-poppins text-gray-500'>{meal.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickSearch;
