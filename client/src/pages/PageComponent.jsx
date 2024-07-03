import React from 'react';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
const PageComponent = () => {
  return (
    <div className="flex flex-col justify-center bg-cyan-100 p-8">
      <div className="w-full p-4">
        <ComponentA />
      </div>
      <div className="w-full p-4">
        <ComponentB />
      </div>
    </div>
  );
}

export default PageComponent;
