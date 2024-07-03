import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OfferService = () => {
    const isMobile = window.innerWidth < 768;
  return (
    <div className=" py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Special Offers for You</h2>
      <div className="max-w-screen-lg  mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          //infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          dynamicHeight={false}
          centerMode={true}
          showIndicators={false}
          centerSlidePercentage={!isMobile?33.3:100}
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
            
          {/* Offer Section 1 */}
          <div className="bg-[#F0F6D6]  rounded-md overflow-hidden text-center m-6 p-6">
            <h3 className="text-lg font-semibold mb-2">Flat 30% off on Rental agreement</h3>
            <p className="text-sm text-gray-700 mb-4">Same day delivery</p>
            <button className="bg-white  text-teal-800 rounded-full py-2 px-4 ">Create Agreement</button>
          </div>
          {/* Offer Section 2 */}
          <div className="bg-[#DBEEF4] rounded-md overflow-hidden text-center m-6 p-6">
            <h3 className="text-lg font-semibold mb-2">Upto 60% off on Home Cleaning</h3>
            <p className="text-sm text-gray-700 mb-4">Lowest Rates</p>
            <button className="bg-white  text-teal-800 rounded-full py-2 px-4">Book Now</button>
          </div>
          {/* Offer Section 3 */}
          <div className="bg-[#DBF3ED] rounded-md overflow-hidden text-center m-6  p-6">
            <h3 className="text-lg font-semibold mb-2">Flat 25% off on Home Painting & Decoration</h3>
            <p className="text-sm text-gray-700 mb-4">Festive Sale</p>
            <button className="bg-white  text-teal-800 rounded-full py-2 px-4">Explore Now</button>
          </div>
          {/* Offer Section 4 */}
          <div className="bg-[#F2EDFC] rounded-md overflow-hidden text-center m-6 p-6">
            <h3 className="text-lg font-semibold mb-2">upto 30% off on Packers & Movers</h3>
            <p className="text-sm text-gray-700 mb-4">House Shifting</p>
            <button className="bg-white  text-teal-800 rounded-full py-2 px-4">View Details</button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OfferService;
