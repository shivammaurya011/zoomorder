import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { loginUser, registerUser } from '../../redux/actions/userAction';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

function Auth() {
  const location = useLocation()
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { loading, success, error } = userState;

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    TandC: false,
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(Cookies.get("Token"));

  useEffect(() => {
    if (success && modalType === 'signup') {
      setModalType('signin');
      setModalOpen(true);
      resetUser();
      dispatch({ type: 'RESET_SUCCESS' });
    }
  }, [success, modalType, dispatch, token]);

  const resetUser = () => {
    setUser({
      fullName: '',
      email: '',
      password: '',
      TandC: false,
    });
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    resetUser();
  };

  const closeModal = () => {
    setModalType('');
    setModalOpen(false);
    resetUser();
  };

  const handleUser = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: user.email, password: user.password }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (user.TandC) {
      await dispatch(registerUser({ fullName: user.fullName, email: user.email, password: user.password }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='flex gap-4 justify-end items-center'>
        <button onClick={() => openModal('signin')} className='px-4 py-2 font-medium text-lg text-white hover:border-2 border-white rounded-md'>Sign In</button>
        <button onClick={() => openModal('signup')} className='px-4 py-2 font-medium text-lg text-white border-2 border-white hover:bg-white hover:text-black rounded-md'>Create an account</button>
      {isModalOpen && (
        <Modal title={modalType === 'signin' ? 'Sign In' : 'Sign Up'} onClose={closeModal}>
          {modalType === 'signin' ? (
            <form className="space-y-4" onSubmit={handleSignin} noValidate>
              <input type='email' placeholder='Email' name='email' onChange={handleUser} value={user.email} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'/>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  name='password'
                  onChange={handleUser}
                  value={user.password}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                />
                <span
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Eye size={20} className='text-gray-400' /> : <EyeOff size={20} className='text-gray-300' />}
                </span>
              </div>
              <button type="submit" className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500">
                New to ZoomOrder? <button type="button" onClick={() => { setModalType('signup'); resetUser(); }} className="text-red-400 hover:underline">Create account</button>
              </div>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleSignup} noValidate>
              <input type="text" placeholder='Full Name' name='fullName' onChange={handleUser} value={user.fullName} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'/>
              <input type='email' placeholder='Email' name='email' onChange={handleUser} value={user.email} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'/>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  name='password'
                  onChange={handleUser}
                  value={user.password}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                />
                <span
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <input onChange={handleUser} name='TandC' checked={user.TandC} type="checkbox" className="form-checkbox text-red-500 h-4 w-4 mr-2"/>
                <span className="text-gray-700">
                  I agree to ZoomOrder's{' '}
                  <span className='text-red-400 hover:underline'>Terms of Service</span>,{' '}
                  <span className='text-red-400 hover:underline'>Privacy Policy</span>, and{' '}
                  <span className='text-red-400 hover:underline'>Content Policies</span>
                </span>
              </div>
              <button
                type="submit"
                disabled={!user.TandC}
                className={`w-full text-white ${user.TandC ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-300 cursor-not-allowed'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              <div className="text-sm font-medium text-gray-500">
                Already have an account? <button type="button" onClick={() => { setModalType('signin'); resetUser(); }} className="text-red-400 hover:underline">Sign In</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Auth;
