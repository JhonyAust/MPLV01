import React from 'react';
import { AiFillHome, AiFillTool, AiFillSafetyCertificate } from 'react-icons/ai';

const ACSection = () => {
  return (
    <div className="bg-[#D8E4F9] py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">AC Summer Needs</h2>
        <div className="flex  flex-row justify-center items-center">
          {/* First rounded box */}
          <div className="bg-white rounded-lg shadow-lg p-8 m-2 flex items-center flex-col w-1/3">
            <AiFillHome size={48} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Title 1</h3>
            <p className="text-gray-600">Subtitle 1</p>
          </div>
          {/* Second rounded box */}
          <div className="bg-white rounded-lg shadow-lg p-8 m-2 flex items-center flex-col w-1/3">
            <AiFillTool size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Title 2</h3>
            <p className="text-gray-600">Subtitle 2</p>
          </div>
        </div>
        {/* Third rounded box */}
        <div className="bg-white rounded-lg shadow-lg p-4 m-2 flex items-center flex-col w-2/3 mx-auto">
          <AiFillSafetyCertificate size={48} className="text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Title 3</h3>
          <p className="text-gray-600">Subtitle 3</p>
        </div>
      </div>
    </div>
  );
};

export default ACSection;
