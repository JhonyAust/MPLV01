import React from 'react';
import PopupModal from './PopupModal';
import { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

const Design = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    return (
        <div>
      
            
            {/* Design Section 9 */}
            <div className="flex items-center justify-center" style={{
                height: "100vh",
                background: "#FFFFFF",
            }}>
                <div className="text-black text-center">
                    {/* Design Section 9 Title */}
                    <h2 className="text-xl mb-6" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Strategic Planning
                    </h2>
                    {/* Design Section 9 Subtitle */}
                    <h1 className="text-4xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Unlocking Success <br/>Through Strategic Planning
                    </h1>
                    {/* Design Section 9 Content */}
                    <div className="max-w-xl mt-5 text-black font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '2px' }}>
                        Our team conducts thorough market analysis and feasibility studies to identify lucrative opportunities for development.
                         We strategize and plan each project meticulously to ensure optimal outcomes for all stakeholders involved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Design Section 10 */}
            <div className="flex items-center justify-center" style={{
                background: "url('/images/plan.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                minHeight: "130vh",
            }}>
            </div>
           

            <div 
      className="bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/stair.jpg)`,
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
                    Resource Optimization
                    </h2>
                    {/* Design Section 1 Subtitle */}
                    <h1 className="text-4xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '1px' }}>
                    Maximizing Efficiency <br/> for Sustainable Growth
                    </h1>
                    {/* Design Section 1 Content */}
                    <div className="max-w-xl mt-5 text-white font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '1px' }}>
                        Through pooled resources and expertise, investors optimize their investment potential and gain access to a diverse range of property opportunities.
                        This collective approach allows for efficient utilization of resources and enhanced investment returns.
                        </p>
                    </div>
                </div>
      
     
    </div>
          

            {/* Design Section 3 */}
            <div className="flex items-center justify-center h-screen" style={{
                
                background: "#818E8B",
            }}>
                <div className="text-white text-center">
                    {/* Design Section 3 Title */}
                    <h2 className="text-xl mb-6" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Accountability
                    </h2>
                    {/* Design Section 3 Subtitle */}
                    <h1 className="text-4xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Transparent Communication and Reporting
                    </h1>
                    {/* Design Section 3 Content */}
                    <div className="max-w-3xl mt-5 text-white font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '2px' }}>
                        Throughout the journey, investors receive regular updates and transparent reporting on project progress, financial performance, and anticipated returns.
                        </p>
                    </div>
                </div>
            </div>

            {/* Design Section 4 */}
            <div className="flex items-center justify-center -mt-4 h-screen" style={{
                background: "url('/images/report.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                minHeight: "135vh",
            }}>
            </div>

            {/* Design Section 5 */}
            <div className="flex items-center justify-center -mt-8" style={{
                height: "75vh",
                background: "#FEF200",
            }}>
                <div className="text-black text-center">
                    {/* Design Section 5 Title */}
                    <h2 className="text-lg mb-4" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Continuous Support
                    </h2>
                    {/* Design Section 5 Subtitle */}
                    <h1 className="text-4xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Empowering Your Journey
                    </h1>
                    {/* Design Section 5 Content */}
                    <div className="max-w-xl mt-5 text-black font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '2px' }}>
                        Our dedicated team offers ongoing support and guidance throughout the investment journey. From project selection and acquisition
                         to development and eventual exit, we are committed to ensuring the success of every venture and the prosperity of our investors.
                        </p>
                    </div>
                </div>
            </div>

             {/* Consultancy */}
             <div className="flex items-center justify-center" style={{
                height: "75vh",
                background: "#FFFFFF",
            }}>
                <div className="text-black text-center">
                    {/* Consultancy. Title */}
                    <h2 className="text-xl mb-6" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Consultancy.
                    </h2>
                    {/* Consultancy.  Subtitle */}
                    <h1 className="text-3xl font-bold" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
                    Expert Guidance and Management
                    </h1>
                    {/* Consultancy.  Content */}
                    <div className="max-w-xl mt-5 text-black font-semibold">
                        <p className="whitespace-pre-wrap" style={{ fontFamily: 'font2, sans-serif', letterSpacing: '1px', wordSpacing: '2px' }}>
                        Our experienced team manages the entire development process, from acquisition and planning to construction and marketing, 
                        ensuring a seamless and profitable venture.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row h-screen gap-4 p-16 ">
                
                {/* First Section */}
                <div className=' relative flex flex-row  border-[1.5px]  rounded-2xl p-6 justify-between gap-4 w-full md:w-2/3'>
                    {/* Title and Subtitle */}
                    <div className="mb-4 w-1/2">
                    <p className="text-[45px]  text-black font-poppins ">Build your property</p>
                    <p className="text-lg text-gray-500">Section 1 Subtitle</p>
                    <div className="absolute bottom-6 left-6"> {/* Center the submit button */}
                        <button type="submit" className="relative overflow-hidden group"onClick={openModal}>
                        <div className="bg-black px-6 text-white font-bold py-2 rounded group-hover:bg-gray-800  transition-colors duration-200 group-hover:px-8">
                            Learn more
                        </div>
                        <MdArrowOutward className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-white  transition-opacity duration-200 group-hover:opacity-100 mr-2 " size={24} />
                        </button>
                        <PopupModal isOpen={modalOpen} onClose={closeModal} />
         
                    </div>
                    </div>
                    {/* Image */}
                    <img src="/images/group.jif" alt="Image" className=" overflow-hidden rounded-2xl w-1/2" />
                </div>
                
                {/* Second Section */}
                <div className='relative w-full md:w-1/3 bg-[#535E73] rounded-2xl p-6'>
                <div className="flex flex-wrap">
                        <div className="relative w-1/3 overflow-hidden z-30">
                            <img className="w-20 border-2 rounded-full" src="/images/team1.png" alt="Team 1" />
                        </div>
                        <div className="relative w-1/3 overflow-hidden -ml-10 z-20">
                            <img className="w-20 border-2 rounded-full" src="/images/team2.png" alt="Team 2" />
                        </div>
                        <div className="relative w-1/3 overflow-hidden -ml-10 z-10">
                            <img className="w-20 border-2 rounded-full" src="/images/team3.png" alt="Team 3" />
                        </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div className="mb-4 mt-4">
                    <h2 className="text-2xl font-bold text-white font-poppins">Speak with our property consultants</h2>
                    <p className="text-md font-poppins mt-4 text-white">With years of real estate experience, our team will guide you through every step of the home buying process.</p>
                    </div>

                   
                    <div className="absolute bottom-6 left-6 "> {/* Center the submit button */}
                        <button type="submit" className="relative overflow-hidden group"onClick={openModal}>
                        <div className="bg-white px-6 text-black font-bold py-2 rounded group-hover:bg-gray-200  transition-colors duration-200 group-hover:px-8">
                            Contact us
                        </div>
                        <MdArrowOutward className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-black  transition-opacity duration-200 group-hover:opacity-100 mr-2 " size={24} />
                        </button>
                        <PopupModal isOpen={modalOpen} onClose={closeModal} />
         
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Design;
