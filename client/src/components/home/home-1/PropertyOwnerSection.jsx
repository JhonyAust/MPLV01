import React from 'react';

const PropertyOwnerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="flex items-center mb-4">
        <div className="border-t border-gray-400 w-1/3 mr-4"></div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white w-96">
          Are you a Property Owner?
        </h2>
        <div className="border-t border-gray-400 w-1/3 ml-4"></div>
      </div>
      <button className="px-6 py-2 bg-teal-600 text-white rounded-sm hover:bg-teal-700 focus:outline-none">
        Post Free Property Ad
      </button>
    </div>
  );
};

export default PropertyOwnerSection;
