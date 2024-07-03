import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
const Step3 = ({ onSubmit, onPrev, onFormData }) => {
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // Validate form data
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.phoneNumber.trim() === '' || formData.address.trim() === ''
    || formData.message.trim() === '') {
      alert('Please enter your name and email.');
      return;
    }
    // Pass form data to parent component
    onFormData({ step3Data: formData });
    onSubmit(); // Submit form data
    // Reset form fields
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
    <form className='p-2' onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 text-black">
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
          
        
        </form>
     
  );
};

export default Step3;
