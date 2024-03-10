import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='absolute top-6 right-6 flex gap-6'>
      <Link
        to='/signin'
        className='px-4 py-2 font-medium text-lg text-white'
      >
        Sign In
      </Link>
      <Link
        to='/signup'
        className='px-4 py-2 font-medium text-lg text-white'
      >
        Sign Up
      </Link>
    </div>
  );
}

export default Header;

