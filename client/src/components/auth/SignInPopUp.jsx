import React, { useState,useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../OAuth/OAuth';

const SignInPopUp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});
  const [isSignInView, setIsSignInView] = useState(true); // State variable to track current view
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      dispatch(signInStart());
      const res = await fetch(isSignInView ? '/api/auth/signin' : '/api/auth/signup', { // Use appropriate endpoint based on current view
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      onClose();
      
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const toggleView = () => {
    setIsSignInView(!isSignInView); // Toggle between sign-in and sign-up views
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.modal')) {
        onClose(); // Close modal when clicking outside of it
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = 'auto'; // Make sure scrolling is re-enabled when component unmounts
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);





  if (!isOpen) return null;

  return (
    <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal max-h-[calc(100vh-100px)] overflow-y-auto bg-white p-8 rounded-xl w-full max-w-lg">
        <div className='flex justify-between'>
          <div className='py-6'>
            <h1 className="text-xl font-sans  ">{isSignInView ? 'Welcome! Please Login to continue.' : 'Create your Account'}</h1>
            <div className='flex gap-2 py-2 '>
              <p className='text-[#3499B4] text-sm font-sans '>{isSignInView ? 'New member? ' : 'Already have an account? '}</p>
              <button className='text-[#3499B4] text-sm font-sans font-semibold underline text-center' onClick={toggleView}>
                {isSignInView ? 'Register here.' : 'Login here.'}
              </button>
            </div> 
          </div>
          <div className=""> 
            <button className="" onClick={onClose}>
              <IoCloseOutline className='text-black p-1' size={32} />
            </button>
          </div>
        </div>
        <div className=''>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          {!isSignInView && (
              <>
                <label htmlFor="username" className="block text-xs text-gray-600 font-poppins ">Username*</label>
                <input
                  type="text"
                  placeholder="Please Enter Your Username"
                  className="border p-3 rounded-lg placeholder-gray-400 font-sans text-xs"
                  id="username"
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <label htmlFor="name" className="block text-xs text-gray-600 font-poppins ">Email*</label>
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="border p-3 rounded-lg placeholder-gray-400 font-sans text-xs"
              id="email"
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="block text-xs text-gray-600 font-poppins ">Password*</label>
            <input
              type="password"
              placeholder="Please Enter Your Password"
              className="border p-3 rounded-lg  placeholder-gray-400 font-sans text-xs"
              id="password"
              onChange={handleChange}
              required
            />
            <div className='py-6 mx-20 mt-10'>
              <button
                disabled={loading}
                className="bg-[#FD3753] text-white p-3  uppercase hover:bg-[#f70020] disabled:opacity-80 w-full"
              >
                {loading ? 'Loading...' : isSignInView ? 'Sign In' : 'Sign Up'}
              </button>
              <div className='w-full text-center py-6'>
              <p className='text-gray-600 font-poppins text-sm'>
                {isSignInView ? 'Or, Login With' : 'Or, Sign Up With'}
             </p>
              </div>
              <div className=' '><OAuth/></div>
            </div>
          </form>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  );
};

export default SignInPopUp;
