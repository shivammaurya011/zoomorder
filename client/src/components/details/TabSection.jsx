import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TabSection({ restaurant }) {
  return (
    <Tabs>
      <TabList className='flex space-x-4 border-b-2 border-gray-300'>
        <Tab className='px-4 py-2 cursor-pointer text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-b-2 border-gray-400'>
          Overview
        </Tab>
        <Tab className='px-4 py-2 cursor-pointer text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:border-b-2 border-gray-400'>
          Contact
        </Tab>
      </TabList>
      <TabPanel>
        <div className='mt-4'>
          <div className='text-gray-700 text-lg font-medium'>About this place</div>
          <div className='text-gray-600 text-base font-medium mt-2'>Cuisine</div>
          <div className='text-gray-400 text-base font-normal'>{restaurant?.cuisine.join(', ')}</div>
          <div className='text-gray-600 text-base font-medium mt-2'>Average Cost</div>
          <div className='text-gray-400 text-base font-normal'>
            &#8377; {restaurant?.costForTwo} for two people (approx.)
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className='py-4'>
          <div className='text-gray-600 text-base font-medium'>Phone Number</div>
          <div className='text-gray-400 text-base font-normal'>{restaurant?.phone}</div>
        </div>
        <div className='text-gray-600 text-base font-medium'>{restaurant?.name}</div>
        <div className='text-gray-400 text-base font-normal'>
          {restaurant?.address},
          <br />
          {restaurant?.area}
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default TabSection;
