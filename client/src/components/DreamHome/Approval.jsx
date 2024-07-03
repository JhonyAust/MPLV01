import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";



const Approval = () => {
  return (
    <div className="relative w-full h-[200vh] overflow-hidden">
    <div 
      className="bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/wood.jpg)`,
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '400px',
        position: 'relative',
        zIndex: 0,
      }}
    >
         <div className="absolute inset-0 bg-black/30"></div>
        <div className="text-white text-center z-10">
                    {/* Design Section 1 Title */}
                    <h2 className="text-xl mb-6 " style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '1px' }}>
                        Goverment Approval
                    </h2>
                    {/* Design Section 1 Subtitle */}
                    <h1 className="text-4xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '1px' }}>
                     Your Gateway to Achievement
                    </h1>
                    {/* Design Section 1 Content */}
                    <div className="max-w-xl mt-5 text-white font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '1px' }}>
                        Navigating approvals from Rajuk, The National Housing Authority, Housing and Public Works, and the Sub Registry can be challenging.
                        Let us simplify the process for you. Our expert services ensure swift clearance for your project, so you can focus on moving forward with confidence.
                        </p>
                    </div>
                </div>
      
     
    </div>
        
        
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        stopOnHover={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title="Previous"
                className="absolute top-1/2 left-2 transform -translate-y-1/2  focus:outline-none z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* <circle cx="12" cy="12" r="10" className="text-white bg-black" /> */}
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
                className="absolute top-1/2 right-2 transform -translate-y-1/2   focus:outline-none z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* <circle cx="12" cy="12" r="10" className="text-white bg-black" /> */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
      >
        <div>
          <img src="/images/rajuk.png" alt="Image 1" 
      />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl font-bold">Rajuk Approval</h2>
            <div className=" max-w-sm lg:max-w-xl mt-5  font-semibold">
            <p className="whitespace-pre-wrap" style={{ letterSpacing: '1px', wordSpacing: '2px' }}>Secure your construction project's legitimacy with streamlined Rajuk approval services.
             We simplify the process, providing expert guidance from documentation to final approval.
             Trust us to navigate the complexities, ensuring your project proceeds seamlessly and with confidence</p>
             </div>
            <button className="mt-4 bg-transparent text-md hover:text-lg text-white font-bold py-1 px-6 border-2 border-white hover:border-none ">Learn more</button>
          </div>
        </div>
        <div>
          <img src="/images/pwd.webp" alt="Image 2" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl font-bold">PWD Approval</h2>
            <div className=" max-w-sm lg:max-w-xl mt-5  font-semibold">
            <p className="whitespace-pre-wrap" style={{ letterSpacing: '1px', wordSpacing: '2px' }}>
                
            Streamline your construction project's legitimacy with our PWD approval services. 
            We simplify the process from start to finish, ensuring seamless progress with expert guidance. Trust us to navigate the complexities, so you can proceed confidently.
                </p>
             </div>
            <button className="mt-4 bg-transparent text-md hover:text-lg text-white font-bold py-1 px-6 border-2 border-white hover:border-none ">Learn more</button>
          </div>
        </div>
        {/* Add more images with titles, subtitles, and buttons as needed */}
      </Carousel>
    </div>
  );
};

export default Approval;
