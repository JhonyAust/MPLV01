import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-transparent px-4">
        <div className="flex flex-col items-center justify-center text-black dark:text-white text-center mb-10 -mt-20">
                    <h1 className="text-4xl font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
                    Subscribe to our newsletter
                    </h1>
                    <div className="max-w-xl mt-5 text-black dark:text-white font-semibold">
                        <p className="whitespace-pre-wrap" style={{ letterSpacing: '1px', wordSpacing: '1px' }}>
                        For monthly thoughts, insights, stories and news from the studio.
                        </p>
                    </div>
                </div>
      <div className="flex justify-center my-">
        
        <input type="email" placeholder="name@example.com" className="py-2 px-8 mr-2 text-black   placeholder-[#B4AB02] ::placeholder bg-[#FEF200] hover:bg-transparent hover:border-b-2 border-black" />
        <button className="p-2 bg-black text-white border-none cursor-pointer">Subscribe</button>
      </div>
      <div className="flex flex-row justify-between mb-12 text-black dark:text-white  px-24  mt-10 ">
        <div className='space-y-4'><p className="">018400000001</p>
        <p className="">info@nomedia.com</p>
        <p className="">House:500/A, Road 7, Dhanmondi, Dhaka.</p>
        <div className="flex flex-row text-3xl gap-4">
        <FaTwitter className="" /> {/* Twitter icon */}
        <FaFacebook className="" /> {/* Facebook icon */}
        <FaYoutube className="" /> {/* YouTube icon */}
        <FaLinkedin className="" /> {/* LinkedIn icon */}
        
      </div>
      </div>
        <div className='space-y-4'><p className="">Privacy Policy</p>
        
      
        <p className="">© 2024. NoMedia.

        <br/>All Rights Reserved</p>
        <p>
          Created By <span className="text-primary text-xl"><Link to="https://www.linkedin.com/in/rayhan-jhony-baa53a1a9/">Rayhan Jhony</Link></span> 
        </p>
        </div>
      
        
        
      </div>
    </footer>
  );
};

export default MyFooter;
