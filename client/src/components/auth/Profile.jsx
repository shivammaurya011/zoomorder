import React, { useState } from 'react'
import Cookies from 'js-cookie';

function Profile() {
  const [showMenu, setShowMenu] = useState(false)
  const handleLogout = () =>{
    Cookies.remove('Token');
    window.location.reload();
  }
  return (
    <div className='w-40 flex flex-col items-center'>
      <img onClick={()=>setShowMenu(prev=>!prev)} className='rounded-full h-12 w-12 bottom-2 border-white' src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" />
      <div className={`mt-2 ${showMenu ? 'block' : 'hidden'}`}>
        <button className='bg-white p-2 rounded-md bottom-2 border-red-500' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
