import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiConfirmed } from "react-icons/gi";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, cartItems, totalAmount, plan } = location.state || {};

  useEffect(() => {
    if ((!formData || !cartItems || cartItems.length === 0) && !plan) {
      const currentPath = window.location.pathname;
      const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
      navigate(newPath);
    }
  }, [formData, cartItems, plan, navigate]);

  return (
    <div className="container mx-auto p-16 mt-12">
      <div className='flex justify-center items-center '>
        <div className='flex flex-col justify-center items-center'>
          <GiConfirmed className='text-green-400' size={36} />
          <h1 className="text-lg font-semibold p-6 text-center">Thank You!<br />Your order has been received.</h1>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
        {formData && (
          <>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Message:</strong> {formData.message}</p>
            <p><strong>Agreed to Terms:</strong> {formData.agreeTerms ? 'Yes' : 'No'}</p>
          </>
        )}
      </div>

      {cartItems && cartItems.length > 0 && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-2">
                <div className="flex justify-between">
                  <span>{item.title}</span>
                  <span className="font-semibold">{item.newCost} BDT</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <span className="font-semibold">Total Amount:</span>
            <span className="font-semibold">{totalAmount} BDT</span>
          </div>
        </div>
      )}

      {plan && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Plan Summary</h2>
          <p><strong>Plan Name:</strong> {plan.name}</p>
          <p><strong>Description:</strong> {plan.description}</p>
          <p><strong>Price:</strong> ৳ {plan.price}</p>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
