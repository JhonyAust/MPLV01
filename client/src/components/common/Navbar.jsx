/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiSearch, BiMenu, BiUser, BiBuildingHouse, BiArrowToRight} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BsHouseDoor, BsTools, BsLightning, BsHammer, BsPaintBucket, BsHouse, BsPerson, BsClock, BsCalendar, BsGearWideConnected, BsQuestionCircle, BsWifi, BsLock, BsMusicNote } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { FaTruckMoving } from "react-icons/fa";
import SignInPopUp from "../auth/SignInPopUp";
import { SlMenu } from 'react-icons/sl';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin  } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp,MdPhone, MdEmail, MdLocationOn} from "react-icons/md";

import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import { navLinks } from "../../data/navLinks";
import SingleLink from "./SingleLink";
import { MdAddHomeWork } from "react-icons/md";
import MenuList from "../Menu/MenuList ";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('CurrentUser:', currentUser);
  const rootDoc = document.querySelector(":root");
  console.log("root doc: ",rootDoc.classList)
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Rename to isOpen
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Add state for submenu
  
  // Show submenu when clicking MyOrders
   const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Show dropdown when clicking the profile icon
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if(isDropdownOpen===false){
      setIsSubmenuOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown and profile icon
    if (isDropdownOpen && !event.target.closest(".profile-dropdown") && !event.target.closest(".profile-icon") && !event.target.closest(".dropdown-icon")) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleContactToggle = () => {
    setShowContactInfo(!showContactInfo);
  };
  const handleLoginClick = () => {
    // Show the sign-in popup
    setIsOpen(true); // Update isOpen to true
    // Update the URL to include '/signin' without navigating
    window.history.pushState({}, '', `${location.pathname}/signin`);
  };

  // Function to close the sign-in popup
  const handleCloseSignInPopup = () => {
    // Hide the sign-in popup
    setIsOpen(false); // Update isOpen to false
    // Remove '/signin' from the URL without navigating
    window.history.pushState({}, '', location.pathname);
  };


   // Define icon data
   const iconData = [
    { icon: <TbAirConditioning size={25} />, title: "Air Conditioning" },
    { icon: <FaTruckMoving size={25} />, title: "Moving Services" },
    { icon: <BsHouseDoor size={25} />, title: "Door Installation" },
    { icon: <BsTools size={25} />, title: "Repair Services" },
    { icon: <BsLightning size={25} />, title: "Electrician Services" },
    { icon: <BsHammer size={25} />, title: "Carpentry Work" },
    { icon: <BsPaintBucket size={25} />, title: "Painting Services" },
    { icon: <BsHouse size={25} />, title: "Home Renovation" },
    // { icon: <BsMusicNote size={25} />, title: "Entertainment Setup" }
  ];


  // Slice the icon data based on showMoreIcons state
  const [showMoreIcons, setShowMoreIcons] = useState(false);
  const displayedIcons = showMoreIcons ? iconData : iconData.slice(0, 4);
  const toggleShowMoreIcons = () => {
    setShowMoreIcons((prevState) => !prevState);
  };
  // Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  // Store darkmode value to localStorage;
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("MutualProperty-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div>
    <div
      className="navbar h-[60px] fixed w-full z-20 top-0 left-0    flex-center-between py-[0.35rem] bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60"
      onMouseOver={handleClose}
    >
      <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1 px-[6%]">
        <img src="/images/logomassets.png" alt="Mutual Assets Logo" className="h-[60px] w-[280px]" />
        {/* <h1 className="hidden md:block">Mutual Assets</h1> */}
      </Link>

      <div className="flex-align-center gap-x-4">
        {/*-------------------------------------- Desktop Menu------------------------------------- */}
        <ul
          className={`hidden sm:flex-align-center ${
            showSearchBar && "!hidden"
          }`}
        >
          {/* {navLinks.map((link) => (
            <SingleLink {...link} key={link.id} />
          ))} */}
        </ul>
        <div className="hidden md:flex flex-row items-center justify-center">
            <Link to="/home-loan" className="p-4">
            <img src="/images/Finmo.png" alt="finmo" className="h-[30px] w-[100px]" />
          </Link>
          {/* <button className="px-2 py-2 bg-teal-600 text-white text-sm rounded-sm hover:bg-teal-700 focus:outline-none">
            Post Free Property Ad
          </button> */}
        </div>
        
        {/*---------------------------------------- Mobile Menu------------------------------------- */}
          <div
            className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
              isSidebarOpen && "open"
            }`}
            onClick={handleCloseSidebar}
          >
            <ul
              className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4  bg-white dark:bg-card-dark h-screen max-w-[350px] w-full -translate-x-[500px] transition-a ${
                isSidebarOpen && "open"
              }`}
            >
              {/* Red section for Login/Sign up and profile icon */}
             
                <div className="bg-primary flex flex-col p-4">
                <div className=" text-[#FFFF] px-2 py-3 flex items-center">
                <div className="icon-box" >
                    <HiMiniUserCircle size={30} className="text-lg mr-4 rounded-full  border-4 border-white" />
                  </div>
                  <p className="flex items-start space-x-4 text-lg">
                    <span>Login / Sign up</span>
                   
                  </p>
                   {/* Arrow icon for navigation */}
                   <IoIosArrowForward size={20} className="ml-20 text-lg" />      
                </div>
      
                <button className="px-4 py-2 bg-white text-gray-800 text-md font-bold rounded-sm flex items-center focus:outline-none">
                  <MdAddHomeWork size={20} className="mr-3 text-[#FD3752]"/>
                  Post your property 
                  <IoIosArrowForward size={20} className="ml-16 text-[#FD3752]" />
                </button>
                </div>
                  
            {/* Grid Section */}
            <div className="bg-gray-100 m-3 rounded-md  flex flex-col">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img src="/images/property8.jpg" alt="Image" className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 flex items-center justify-between">
                    <h3 className="text-white text-md">Home Painting</h3>
                    <button className="px-4 py-2 bg-[#009587] text-white rounded-lg focus:outline-none">
                      Book
                    </button>
                  </div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
              {displayedIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="rounded-full bg-[#F0F4FC] p-4 mb-2 shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-xs">{item.title}</span>
                </div>
              ))}
              {/* Show More/Less Icons Button */}
              
            </div>
            {iconData.length > 4 && (
              <button
                className="px-20 py-2  font-mono text-center bg-[#009587] text-white text-md font-semibold rounded-sm flex  focus:outline-none"
                onClick={toggleShowMoreIcons}
              >
                {showMoreIcons ? "Less Services" : "More Services"}
                {showMoreIcons ? (
                  <BiChevronUp size={25} className="ml-1 text-white" />
                ) : (
                  <BiChevronDown size={25} className="ml-1 text-white" />
                )}
              </button>
            )}
            </div>
            <div className="md:col-span-2">
              <MenuList/>
            </div>
                
            

              {/* Navigation links */}
              {navLinks?.map(({ id, linkText, url, subLinks }) => (
                <ul key={id}>
                  <NavLink
                    to={url}
                    end
                    className="w-fit p-3 before:!hidden"
                    onClick={() => dispatch(closeSidebar())}
                  >
                    {linkText}
                  </NavLink>
                  {subLinks?.map(({ id, linkText, url }) => (
                    <ul key={id} className="mt-2">
                      <NavLink
                        to={url}
                        end
                        className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                        onClick={() => dispatch(closeSidebar())}
                      >
                        {linkText}
                      </NavLink>
                    </ul>
                  ))}
                </ul>
              ))}
            </ul>
          </div>




{/*---------------------------------------- Desktop Menu 2------------------------------------- */}
          {/* <div
            className={`hidden md:block mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
              isSidebarOpen && "open"
            }`}
            onClick={handleCloseSidebar}
          >
            <ul
              className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4  bg-white dark:bg-card-dark h-screen max-w-[350px] w-full -translate-x-[500px] transition-a ${
                isSidebarOpen && "open"
              }`}
            >
              
              
              {navLinks?.map(({ id, linkText, url, subLinks }) => (
                <ul key={id}>
                  <NavLink
                    to={url}
                    end
                    className="w-fit p-3 before:!hidden"
                    onClick={() => dispatch(closeSidebar())}
                  >
                    {linkText}
                  </NavLink>
                  {subLinks?.map(({ id, linkText, url }) => (
                    <ul key={id} className="mt-2">
                      <NavLink
                        to={url}
                        end
                        className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                        onClick={() => dispatch(closeSidebar())}
                      >
                        {linkText}
                      </NavLink>
                    </ul>
                  ))}
                </ul>
              ))}
            </ul>
          </div> 
          
        */}




        <div className="space-x-2 flex-align-center">
          {/*----------------------------- search Bar----------------------------------------------------- */}
          <form onSubmit={handleSubmit} className="hidden md:flex">
            <div
              className={`flex-align-center  relative h-9 w-9 transition-a  border-slate-300 dark:border-dark rounded-full ${
                showSearchBar &&
                "!w-[150px] md:!w-[200px] border bg-transparent text-inherit"
              }`}
            >
              <input
                type="search"
                className={`outline-none border-none h-0 w-0 bg-transparent ${
                  showSearchBar && "!w-full !h-full px-4"
                }`}
                placeholder="search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span
                className={`grid flex-shrink-0 rounded-full w-9 h-9 place-items-center text-white bg-primary sm:cursor-pointer ${
                  showSearchBar &&
                  " hover:bg-slate-400 text-inherit sm:cursor-pointer dark:hover:bg-hover-color-dark"
                }`}
                onClick={() => setShowSearchBar(!showSearchBar)}
              >
                <BiSearch className="text-muted" />
              </span>
            </div>
          </form>

          {/*----------------------------- Dark mode toggle-------------------------------------------------- */}
          <div
            className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
            onClick={handleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </div>
          {/*----------------------------- Profile Icon-------------------------------------------------- */}
           {/* Profile Icon and dropdown */}
           {currentUser ? (
                <div className="relative">
                  <img
                    className="rounded-full h-8 w-8 object-cover cursor-pointer profile-icon"
                    src={currentUser.avatar}
                    alt="profile"
                    onClick={toggleDropdown}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg profile-dropdown">
                      <ul className="flex flex-col py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>
                            Profile
                          </Link>
                        </li>
                        <li className="px-4 py-2 " onClick={toggleSubmenu}>
                          <div className="flex items-center justify-between hover:bg-gray-100">
                            <Link to="profile/my-orders" onClick={() => setIsDropdownOpen(false)}>
                              My Orders
                            </Link>
                            {isSubmenuOpen ? <BiChevronUp className="dropdown-icon" size={20} /> : <BiChevronDown className="dropdown-icon" size={20} />}
                          </div>
                          {isSubmenuOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                              <li className="hover:bg-gray-100">
                                <Link to="/profile/my-orders/plans" onClick={() => setIsDropdownOpen(false)}>
                                  MyPlans
                                </Link>
                              </li>
                              <li className="hover:bg-gray-100">
                                <Link to="/profile/my-orders/paint-order" onClick={() => setIsDropdownOpen(false)}>
                                  Paint Order
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="/profile/my-listings" onClick={() => setIsDropdownOpen(false)}>
                            My Listings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent">
                  <button className="px-2 py-1 text-sm text-primary" onClick={handleLoginClick}>
                    <HiMiniUserCircle size={24} />
                  </button>
                </div>
              )}

          
          {/*------------------------------- Mobile Menu Toogle------------------------- */}
          <div
            className="icon-box md:hidden"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu />
          </div>

          {/* Custom Menu List for desktop */}

          <div className="relative hidden sm:hidden md:block">
          <SlMenu
            className="text-2xl mr-6 text-black cursor-pointer"
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
    </div>
    <SignInPopUp isOpen={isOpen} onClose={handleCloseSignInPopup}/>
    </div>
  );
};

export default Navbar;
