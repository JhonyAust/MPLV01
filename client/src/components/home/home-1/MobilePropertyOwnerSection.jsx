import React from 'react';

const MobilePropertyOwnerSection = () => {
  return (
    <div className="p-4 w-full bg-[#E7F2FD] flex flex-row">
      {/* Left Side Section */}
      <div className="flex flex-col w-1/2 items-center justify-center">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
        Looking for Tenants / Buyers ?
        </h2>
        <div className="flex flex-col  mb-4">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm text-gray-800">Faster & Verified Tenants/Buyers</p>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm text-gray-800">Pay ZERO brokerage</p>
          </div>
        </div>
        <button className="px-6 py-2 bg-primary text-sm text-white rounded-sm hover:bg-red-700 focus:outline-none">
          Post Free Property Ad
        </button>
      </div>
       {/* Right Side Section */}
       <div className="flex justify-center w-1/2">
        <img src="/images/home.svg" alt="Property" className="w-3/4 md:w-1/2 lg:w-2/3" />
      </div>
    
    </div>
  );
};

export default MobilePropertyOwnerSection;
