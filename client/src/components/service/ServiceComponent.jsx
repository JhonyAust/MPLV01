import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiSearch, BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsHouseDoor, BsTools, BsLightning, BsHammer, BsPaintBucket, BsHouse, BsPerson, BsClock, BsCalendar, BsGearWideConnected, BsQuestionCircle, BsWifi, BsLock, BsMusicNote } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { FaTruckMoving } from "react-icons/fa";

const ServiceComponent = () => {
  const [showMoreIcons, setShowMoreIcons] = useState(false);
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
    

  // Define icon data
  const iconData = [
    { icon: <TbAirConditioning size={30} />, title: "Air Conditioning" },
    { icon: <BsPaintBucket size={30} />, title: "Painting Services" },
    { icon: <FaTruckMoving size={30} />, title: "Moving Services" },
    { icon: <BsHouseDoor size={30} />, title: "Door Installation" },
    { icon: <BsTools size={30} />, title: "Repair Services" },
    { icon: <BsLightning size={30} />, title: "Electrician Services" },
    { icon: <BsHammer size={30} />, title: "Carpentry Work" },
    
    { icon: <BsHouse size={30} />, title: "Home Renovation" },
    { icon: <BsPerson size={30} />, title: "Cleaning Services" },
    { icon: <BsClock size={30} />, title: "Time Management" },
    { icon: <BsCalendar size={30} />, title: "Appointment Scheduling" },
    { icon: <BsGearWideConnected size={30} />, title: "Smart Home Setup" },
    { icon: <BsQuestionCircle size={30} />, title: "Support Services" },
    { icon: <BsWifi size={30} />, title: "Network Setup" },
    { icon: <BsLock size={30} />, title: "Security Services" },
    // { icon: <BsMusicNote size={30} />, title: "Entertainment Setup" }
  ];

  // Slice the icon data based on showMoreIcons state
  const displayedIcons = showMoreIcons ? iconData : iconData.slice(0, 7);

  const toggleShowMoreIcons = () => {
    setShowMoreIcons(prevState => !prevState);
  };

  return (
    <div className={`bg-[#F0F4FC] dark:bg-transparent  ${showMoreIcons ? 'min-h-screen' : 'min-h-screen'}  w-full`}>
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
            <div className={`grid grid-cols-4 gap-4 mr-8 ${showMoreIcons ? 'lg:w-1/2' : 'lg:w-1/2'}  mb-4 ${isMobile ? 'lg:mb-0' : ''}`}>
              {displayedIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="rounded-full bg-white p-4 mb-2 shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-xs">{item.title}</span>
                </div>
              ))}
              {/* Show More/Less Icons Button */}
              {iconData.length > 7 && (
                <button
                  className={"flex flex-col items-center justify-center"}
                  onClick={toggleShowMoreIcons}
                >
                  {showMoreIcons ? (
                    <>
                    <div className="rounded-full bg-white p-4 mb-2 shadow-md">
                    <BiChevronUp size={30}/>
                     </div>
                      <span className="text-xs">Show Less Icons</span>
                    </>
                  ) : (
                    <>
                      <div className="rounded-full bg-white p-4 mb-2 shadow-md">
                    <BiChevronDown size={30}/>
                     </div>
                      <span className=" text-xs">Show More Icons</span>
                    </>
                  )}
                </button>
              )}
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
                  <img src="/images/property.jpg" alt="Image 1" className='w-60 h-60' />
                  <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white p-4 flex justify-between items-end">
                    <h3 className="text-lg">Painting Service</h3>
                    <button className="bg-teal-600 text-white px-2 py-1 rounded">Book Now</button>
                  </div>
                </div>

                <div className="relative">
                  <img src="/images/property8.jpg" alt="Image 1" className='w-60 h-60' />
                  <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 text-white p-4 flex justify-between items-end">
                    <h3 className="text-lg">Cleaning Service</h3>
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

export default ServiceComponent;
