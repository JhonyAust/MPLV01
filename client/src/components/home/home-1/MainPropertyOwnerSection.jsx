import React from 'react';
import PropertyOwnerSection from './PropertyOwnerSection';
import MobilePropertyOwnerSection from './MobilePropertyOwnerSection';

const MainPropertyOwnerSection = () => {
  const isMobile = window.innerWidth < 768;;
  
  return (
    <div className="pt-12">
      
      {isMobile ? <MobilePropertyOwnerSection /> : <PropertyOwnerSection />}
    
    </div>
  );
};

export default MainPropertyOwnerSection;
