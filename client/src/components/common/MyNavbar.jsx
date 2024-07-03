import React, { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin  } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp,MdPhone, MdEmail, MdLocationOn} from "react-icons/md";


const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleContactToggle = () => {
    setShowContactInfo(!showContactInfo);
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-white border-b border-gray-200">
      <div className="flex items-center justify-between  h-[60px]">
        {/* Logo on the left side */}
        <Link to="/">
          <img src="/images/logomassets.png" alt="Logo" className="h-[60px] w-[280px] ml-12" />
        </Link>
        {/* Menu icon on the right side */}
        <div className="relative">
          <SlMenu
            className="text-3xl mr-6 text-black cursor-pointer"
            onClick={handleMenuToggle}
          />
          {/* Menu list */}
          {menuOpen && (
            <div className="absolute top-full right-0 bg-white mt-2 shadow-2xl w-[300px] border-[1.5px] border-gray-200 overflow-y-auto  max-h-[450px]">
              <div className="text-gray-500  text-md p-6 font-poppins">
                <ul className="flex flex-col gap-4 ">
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/home">Post Your Property</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/about">Rental Agreement</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/group-share">Group Share</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/contact">Refer & Earn</Link>
                  </li>
                
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/home">Home Services</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/about">Home Loan</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/services">Buil Your Home</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/contact">Buyer Plans</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/home">Seller Plans</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/about">Commercial Plans</Link>
                  </li>
                  <li className="border-b border-gray-200 py-2 hover:text-green-700">
                    <Link to="/services">Blog</Link>
                  </li>
                  <li className=" "onClick={handleContactToggle}>
                     
                      Contact
                      {!showContactInfo ? (
                      <MdOutlineKeyboardArrowDown size={24} className="ml-20 inline " />
                      ):(<MdOutlineKeyboardArrowUp size={24} className="ml-20 inline " />)}
                    
                    {showContactInfo && (
                      <div className='space-y-4 p-6 text-gray-950'>
                      <div className="flex items-center">
                        <MdPhone className="mr-2" size={16} />
                        <p className="">018400000001</p>
                      </div>
                      <div className="flex items-center">
                        <MdEmail className="mr-2" size={16} />
                        <p className="">info@nomedia.com</p>
                      </div>
                      <div className="flex ">
                        <MdLocationOn className="mr-2" size={36} />
                        <p className="">House:500/A, Road 7, Dhanmondi, Dhaka.</p>
                      </div>
                        <div className="flex flex-row text-3xl gap-4">
                          <FaTwitter className="" /> {/* Twitter icon */}
                          <FaFacebook className="" /> {/* Facebook icon */}
                          <FaYoutube className="" /> {/* YouTube icon */}
                          <FaLinkedin className="" /> {/* LinkedIn icon */}
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
