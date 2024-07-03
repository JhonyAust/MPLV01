import React from 'react';

const ComponentA = () => {

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-200 p-8">
      <h2 className="text-3xl font-bold mb-8">Component A</h2>
      <div className="flex flex-col p-8 gap-6">
        <div id="card1" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Card 1</h3>
          <p className="text-gray-600">Subtitle 1</p>
          <button onClick={() => handleScrollToSection('section1')} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="card2" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Card 2</h3>
          <p className="text-gray-600">Subtitle 2</p>
          <button onClick={() => handleScrollToSection('section2')} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="card3" className="bg-white p-8 rounded-lg shadow-md flex-1 mr-4">
          <h3 className="text-xl font-bold mb-2">Card 3</h3>
          <p className="text-gray-600">Subtitle 3</p>
          <button onClick={() => handleScrollToSection('section3')} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
        <div id="card4" className="bg-white p-8 rounded-lg shadow-md flex-1">
          <h3 className="text-xl font-bold mb-2">Card 4</h3>
          <p className="text-gray-600">Subtitle 4</p>
          <button onClick={() => handleScrollToSection('section4')} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Button</button>
        </div>
      </div>
    </div>
  );
}

export default ComponentA;
