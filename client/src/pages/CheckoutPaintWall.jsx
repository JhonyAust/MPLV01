import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MdArrowOutward } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const CheckoutPaintWall = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '+880',
    address: '',
    message: '',
    agreeTerms: false
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value; // For non-checkbox inputs, use the input value
    setFormData({ ...formData, [name]: newValue });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here

    // If form is valid, proceed to place order page
    navigate('/painting-wall-services/checkout/order-confirmation', { state: { formData } });
    setFormData({
        name: '',
        email: '',
        phoneNumber: '+880',
        address: '',
        message: '',
        agreeTerms: false
      });
  };

 

  return (
    <div className="flex justify-between p-20 bg-gray-50">
      {/* Shipping details section */}
      <div className=' w-1/2'>
        <h2>Shipping Details</h2>
        <div className='mx-6 '>
        <form className=' py-4' onSubmit={handleSubmit}>
          <div className=" text-black space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-gray-600 font-poppins ">Name*</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='E.g.: John' required className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-gray-600 font-poppins ">Email*</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='E.g.: john@gmail.com' required className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-xs text-gray-600 font-poppins ">Phone number*</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='' required className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder" />
            </div>
            <div>
              <label htmlFor="address" className="block text-xs text-gray-600 font-poppins ">Address*</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder='House 500, Road 7, Dhanmondi' required className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder" />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-xs text-gray-600 font-poppins ">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder='' rows="4" className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"></textarea>
            </div>
            <div className="col-span-2 flex items-center">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} required  onChange={handleChange} className="mr-2 " />
            <label htmlFor="agreeTerms" className="text-sm font-poppins text-gray-600">I have read,understood,and accept the <span className=' underline'>Terms & Conditions</span> and Privacy Policy of Nomedia.</label>
          </div>
          </div>
          <div className="flex justify-center py-8"> {/* Center the submit button */}
            <button type="submit" className="relative overflow-hidden group">
              <div className="bg-black px-20 text-white font-bold py-2 rounded group-hover:bg-gray-800  transition-colors duration-200 group-hover:px-24">
                Place Order
              </div>
              <MdArrowOutward className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-white  transition-opacity duration-200 group-hover:opacity-100 mr-10 " size={24} />
            </button>
          </div>
        </form>
        </div>
      </div>
      {/* Cart summary section */}
      
      <div className='p-12'>
      <div className=' bg-white border-2 rounded-sm p-4'>
        <div className='flex gap-2 py-4'>
          <IoCartOutline size={24}/>
        <h2>Cart Summary</h2>
        <button className=' font-poppins text-xs text-sky-400' onClick={() => navigate('/painting-wall-services/cart')}>
          (Edit)
          </button>
        </div>
        <ul className=' text-gray-600 font-poppins text-sm'>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className='flex justify-between gap-8 p-2'>
                <div>{item.title} </div>
                <div className='font-semibold text-black'>
                  <div className='flex gap-2'><div>৳</div>{item.newCost}</div>
                  </div>
              </div>
              
            </li>
          ))}
        </ul>
        <div className='flex justify-between gap-4 py-2 border-t-[1px] border-black mt-4 font-semibold text-black'>
          <div>Total Amount:</div>
          <div className='flex gap-2'>
            <div>৳</div>
            {totalAmount}
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckoutPaintWall;
