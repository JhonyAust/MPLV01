import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import { FaFileContract } from 'react-icons/fa';
import { FaHandHoldingUsd, FaHome, FaUserCheck } from 'react-icons/fa';


const HeroLoan = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row  relative">
      

      {/* 1st Section */}
      <div className="p-8 w-2/3"style={{backgroundImage: "linear-gradient(to  right, #1D1C32, #59569C)"}}>
      
      <div className=" text-white  w-full mt-20">
        <h2 className="text-3xl font-bold px-6 mb-6">Special Offers for You</h2>
        <div className=" mx-auto">
          {/* Offer Carousel */}
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
            centerMode={true}
            showIndicators={false}
            centerSlidePercentage={!isMobile ? 50 : 100}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title="Previous"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full focus:outline-none z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" className="text-white bg-black" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
          >
            {/* Offer Section 1 */}
            <div className="bg-[#F0F6D6] rounded-md overflow-hidden text-center m-6 p-6" style={{
        background: "url('/images/property8.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "",
      }}>
              <h3 className="text-lg text-teal-800 font-semibold mb-2">Flat 30% off on Rental agreement</h3>
              <p className="text-sm text-gray-700 mb-4">Same day delivery</p>
              <button className="bg-white text-teal-800 rounded-full py-2 px-4">Create Agreement</button>
            </div>
            {/* Offer Section 2 */}
            <div className="bg-[#DBEEF4] rounded-md overflow-hidden text-center m-6 p-6">
              <h3 className="text-lg text-teal-800 font-semibold mb-2">Upto 60% off on Home Cleaning</h3>
              <p className="text-sm text-gray-700 mb-4">Lowest Rates</p>
              <button className="bg-white text-teal-800 rounded-full py-2 px-4">Book Now</button>
            </div>
            {/* Offer Section 3 */}
            <div className="bg-[#DBF3ED] rounded-md overflow-hidden text-center m-6 p-6">
              <h3 className="text-lg text-teal-800 font-semibold mb-2">Flat 25% off on Home Painting </h3>
              <p className="text-sm text-gray-700 mb-4">Festive Sale</p>
              <button className="bg-white text-teal-800 rounded-full py-2 px-4">Explore Now</button>
            </div>
            {/* Offer Section 4 */}
            <div className="bg-[#F2EDFC] rounded-md overflow-hidden text-center m-6 p-6">
              <h3 className="text-lg text-teal-800 font-semibold mb-2">upto 30% off on Packers & Movers</h3>
              <p className="text-sm text-gray-700 mb-4">House Shifting</p>
              <button className="bg-white text-teal-800 rounded-full py-2 px-4">View Details</button>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="p-8">
      <div className="bg-gray-200 p-8 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center">
        {/* Icon */}
        <FaFileContract className="text-4xl text-gray-600 mr-4" />
        {/* Title and Subtitle */}
        <div>
          <h2 className="text-md font-semibold">Free Sale Agreement Draft</h2>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Right side */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Details</button>
    </div>
    </div>
    </div>
    {/* Second Section */}
    <div className="bg-[#59569C] pr-4 w-1/3">
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-md shadow-custom p-6 flex flex-col ">
      <div className="absolute top-0 right-0 rounded-full overflow-hidden bg-[#04a7ff]/60 dark:bg-[#04a7ff]/50 w-72 h-72 z-10 blur-[120px]"></div>
        {/* Title */}
        <h2 className="text-xl text-black font-semibold mb-4 ">Check&nbsp;&nbsp;Your&nbsp;&nbsp;Loan&nbsp;&nbsp;Eligibility&nbsp;&nbsp;in&nbsp;&nbsp;  <br/> Just&nbsp; <span className="text-green-700  text-2xl font-bold"> 2 minutes!</span></h2>
        {/* Subtitles with Icons */}
        <div className="flex flex-col  justify-between mb-4">
          {/* Subtitle 1 */}
          <div className="flex items-center mt-4">
          <img src="images/hr.webp" alt="Offer 1" className="w-6 h-6 mr-4" />
            <p className="text-md text-black">Unsecured upto 5 Crs</p>
          </div>
          {/* Subtitle 2 */}
          <div className="flex items-center mt-4">
          <img src="images/star.webp" alt="Offer 1" className="w-6 h-6 mr-4" />
            <p className="text-md text-black">Attractive interest rates</p>
          </div>
          {/* Subtitle 3 */}
          <div className="flex items-center mt-4">
          <img src="images/watch.webp" alt="Offer 1" className="w-6 h-6 mr-4" />
            <p className="text-md text-black">Approval within 48 hrs</p>
          </div>
        </div>
        {/* Button */}
        <button className="bg-[#006EFA] text-white px-4 py-2 rounded-md hover:bg-blue-600">Check Eligibility Now!</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HeroLoan;
