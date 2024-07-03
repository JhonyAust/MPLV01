import React from 'react';

const ComponentB = () => {
  return (
    <div className="bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-8">Component B</h2>
      <div className="flex flex-col p-8 gap-6">
        <div id="section1" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Section 1</h3>
          <p className="text-gray-600">Subtitle 1</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="section2" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Section 2</h3>
          <p className="text-gray-600">Subtitle 2</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="section3" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Section 3</h3>
          <p className="text-gray-600">Subtitle 3</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="section4" className="bg-white p-8 rounded-lg shadow-md flex-1">
          <h3 className="text-xl font-bold mb-2">Section 4</h3>
          <p className="text-gray-600">Subtitle 4</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
      </div>
    </div>
  );
}

export default ComponentB;
