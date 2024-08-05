import React, { useEffect, useState } from 'react';
import Layout from '../layout/Index';
import { useParams } from 'react-router-dom';
import { restaurants as restaurantData } from '../data';
import Carousels from '../components/details/Carousels';
import TabSection from '../components/details/TabSection';

function Details() {
  const [restaurant, setRestaurant] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const res = restaurantData.find((item) => item.id === Number(id));
    setRestaurant(res);
  }, [id]);

  return (
    <Layout>
      <div className='p-4 md:p-8 flex flex-col gap-6 font-poppins'>
        <Carousels />
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-600'>{restaurant?.name}</h2>
          <button className='py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600'>
            Place Online Order
          </button>
        </div>
        <TabSection restaurant={restaurant} />
      </div>
    </Layout>
  );
}

export default Details;
