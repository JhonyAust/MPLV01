import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
const PopupModal = ({ isOpen, onClose }) => {
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
    if (!isOpen) {
        setFormData({
            name: '',
            email: '',
            phoneNumber: '+880',
            address: '',
            message: '',
            agreeTerms: false
          });
      }

    return () => {
      document.body.style.overflow = 'auto'; // Make sure scrolling is re-enabled when component unmounts
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phoneNumber: '+880',
      address: '',
      message: '',
      agreeTerms: false
    });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal max-h-[calc(100vh-100px)] overflow-y-auto  bg-white p-8 rounded-xl w-full max-w-xl">
      <button className="  bg-[#F6F6F6] rounded-full  ml-[500px]  "onClick={onClose}>
        <IoCloseOutline className='text-black p-1  z-10' size={28}  />
        </button>
        <p className="text-2xl  p-2 font-semibold mb-4 -mt-5 text-[#1A202C]">Share Your Query with Us</p>
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
          <div className="flex justify-center mt-4"> {/* Center the submit button */}
            <button type="submit" className="relative overflow-hidden group">
              <div className="bg-black px-20 text-white font-bold py-2 rounded group-hover:bg-gray-800  transition-colors duration-200 group-hover:px-24">
                Submit
              </div>
              <MdArrowOutward className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-white  transition-opacity duration-200 group-hover:opacity-100 mr-10 " size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
