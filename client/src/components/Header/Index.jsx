import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Auth from '../auth/Auth';
import Cookies from 'js-cookie';
import Profile from '../auth/Profile';
import { useLocation } from 'react-router-dom';

function Index() {
  const [token, setToken] = useState(Cookies.get('Token'));
  const userState = useSelector((state) => state.user);
  const location = useLocation()
  useEffect(() => {
    if (userState.userProfile) {
      setToken(Cookies.get('Token'));
    }
  }, [userState.userProfile]);

  return (
    <div className={`py-2 px-8 w-full flex justify-between items-center bg-red-500 ${location.pathname === '/' && 'absolute top-0 z-20 bg-transparent'}`}>
      <div>
        {location.pathname !== '/' && (
          <div className='flex justify-center items-center font-bold h-12 w-12 rounded-full bg-white'>
            <span className='text-red-500 text-2xl'>Z!</span>
          </div>
          )}
      </div>
      {token ? (<Profile/>) : (<Auth onLogin={() => setToken(Cookies.get('Token'))} />)}
    </div>
  );
}

export default Index;
