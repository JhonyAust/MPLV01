import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdArrowOutward } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';

const CheckoutPlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '+880',
    address: '',
    message: '',
    agreeTerms: false,
  });

  useEffect(() => {
    if (!plan) {
      navigate('/');
    }
  }, [plan, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        user: currentUser._id,
        items: {title: plan.name,newCost:plan.price},
        price: plan.price,
        totalAmount: plan.price,
        shippingDetails: formData,
        type: 'plan',
      };

      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      console.log('Order saved:', data);

      setFormData({
        name: '',
        email: '',
        phoneNumber: '+880',
        address: '',
        message: '',
        agreeTerms: false,
      });

      navigate(`${location.pathname}/order-confirmation`, {state: { formData, plan }, });
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div className="flex justify-between p-20 bg-gray-50">
      <div className="w-1/2">
        <h2>Shipping Details</h2>
        <div className="mx-6">
          <form className="py-4" onSubmit={handleSubmit}>
            <div className="text-black space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-600 font-poppins">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g.: John"
                  required
                  className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"
                />
              </div>
              <div>
              <label htmlFor="email" className="block text-xs text-gray-600 font-poppins">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E.g.: john@gmail.com"
                  required
                  className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-xs text-gray-600 font-poppins">Phone number*</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+880"
                  required
                  className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-xs text-gray-600 font-poppins">Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="E.g.: 123 Street, City, Country"
                  required
                  className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-gray-600 font-poppins">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message (optional)"
                  className="mt-1 p-2 text-sm text-gray-600 font-poppins border bg-[#F5F5F5] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm placeholder-[#CCCCCC] ::placeholder"
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label htmlFor="agreeTerms" className="text-xs text-gray-600 font-poppins">I agree to the terms and conditions*</label>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-2 bg-[#0CB88F] text-white rounded-md text-sm font-poppins hover:bg-[#0AA67A] transition-all"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{plan?.name}</h2>
          <p className="text-gray-700">{plan?.description}</p>
          <div className="mt-4">
            <p className="text-gray-800 font-bold text-lg">Price: ৳ {plan?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPlan;
