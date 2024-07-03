import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiSearch, BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsHouseDoor, BsTools, BsLightning, BsHammer, BsHouse, BsPerson, BsClock, BsCalendar, BsGearWideConnected, BsQuestionCircle, BsWifi, BsLock, BsMusicNote } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { FaTruckMoving, FaExternalLinkAlt } from "react-icons/fa"; // Import the FaExternalLinkAlt icon
import CardComponent from './CardComponent';
const PaintingWallComponent = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [searchText, setSearchText] = useState('');
  const initialText = 'Search...';
  const finalText = 'Search for something...'; // Add your desired final text here
  const typingSpeed = 500; // Adjust typing speed as needed
  const delayBeforeStartTyping = 100; // Adjust delay before typing starts

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    updateIsMobile(); // Call initially
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const texts = ['Search for something...', 'Explore new services...', 'Find what you need...']; // Add more texts as needed
    let textIndex = 0;
    let charIndex = 0;
    let timeoutId;
  
    const typeNextLetter = () => {
      const currentText = texts[textIndex];
      const currentLength = searchText.length;
      if (currentLength < currentText.length) {
        setSearchText(currentText.substring(0, currentLength + 1));
        timeoutId = setTimeout(typeNextLetter, typingSpeed);
      } else {
        // Reset charIndex and move to the next text
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Loop back to the first text when reaching the end
        setSearchText(''); // Reset searchText to trigger useEffect for the next text
      }
    };
  
    timeoutId = setTimeout(typeNextLetter, delayBeforeStartTyping);
  
    return () => clearTimeout(timeoutId);
  }, [searchText]);
   
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  // Define icon data
  const iconData = [
    { icon: <img src="/images/interior-painting.svg" alt="Interior" className="w-8 h-8"/>, title: "Interior Painting" }, 
    { icon: <img src="/images/paintwork.svg" alt="Exterior" className="w-8 h-8" />, title: "Exterior Painting" },
    { icon: <img src="/images/material.svg" alt="waterproof" className="w-8 h-8"/>, title: "Water Proofing" },
    { icon: <img src="/images/painting.svg" alt="rentalpaint" className="w-8 h-8"/>, title: "Rental Painting" },
 
  ];


  return (
    <div className={`bg-[#F0F4FC] dark:bg-transparent  min-h-screen w-full`}>
      <div className=' bg-[#4D52A0] block md:hidden h-32 w-full'></div>
      <div className="flex justify-center w-full items-center  px-8 -mt-6  ">
      
        <div className=" max-w-screen-lg flex flex-col md:mt-32 lg:mt-32">
        
          {/* Search Section */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder={searchText || initialText}
              className="px-4  py-3  w-full rounded-md shadow-lg outline-none border border-gray-300"
            />
            <button className="absolute right-2 top-2 bottom-2 flex items-center justify-center text-black rounded-full px-4">
              <BiSearch className="text-xl" />
            </button>
          </div>
          {/* Grid and Carousel Sections */}
          <div className={`flex ${isMobile ? 'flex-col ' : 'flex-row '} px-8  mb-8`}>
            {/* Grid Section */}
            <div className='flex items-center  '>
              <h1 className=' text-3xl text-gray-600'>Best Home Painting Services in Bangladesh</h1>
              
            </div>
            
            {/* Carousel Section */}
           
              <div className={`${isMobile ? 'w-full ' : ' w-1/2'}`}>
                <div className="rounded-md overflow-hidden">
                  <Carousel 
                  showThumbs={false}
                  showStatus={false}
                  showArrows={true}
                  infiniteLoop={true}
              
                  emulateTouch={true}
                  swipeable={true}
                  dynamicHeight={false}
                  centerMode={true}
                  showIndicators={false}
                  centerSlidePercentage={100}
                  renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title="Previous"
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full focus:outline-none z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" className="text-white bg-black" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title="Next"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg focus:outline-none z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" className="text-white bg-black" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )
                  }
                >
               <div className="relative">
                  <img src="/images/paint.webp" alt="Image 1" className='w-60 h-60' />
                  <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white p-4 flex justify-between items-end">
                    <div className='flex flex-row'>
                     <img src="/images/mural.jpg" alt="mural" className="w-7 h-7 mr-3 " style={{ border: "2px solid white" }}/>
                    <h3 className="text-md">Painting </h3>
                    </div>
                    <button className="bg-teal-600 text-white px-2 py-1 rounded">Book Now</button>
                  </div>
                </div>

                <div className="relative">
                  <img src="/images/mural.jpg" alt="Image 1" className='w-60 h-60' />
                  <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white p-4 flex justify-between items-end">
                  <div className='flex flex-row'>
                     <img src="/images/paint.webp" alt="mural" className="w-7 h-7 mr-3 " style={{ border: "2px solid white" }}/>
                    <h3 className="text-md">Painting </h3>
                    </div>
                    <button className="bg-teal-600 text-white px-2 py-1 rounded">Book Now</button>
                  </div>
                </div>
              {/* Add more images as needed */}
                  </Carousel>
                </div>
              </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PaintingWallComponent;
