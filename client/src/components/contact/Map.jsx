import React from 'react';

const Map = () => {
  const backgroundImageUrl = '/images/property.jpg'; // Replace with your image URL

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '400px',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
     
    </div>
  );
};

export default Map;
