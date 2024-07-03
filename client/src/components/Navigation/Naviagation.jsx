import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline",link: "/home-3" },
    { name: "Profile", icon: "person-outline",link: "/profile"},
    { name: "Message", icon: "chatbubble-outline",link: "/contact" },
    { name: "Photos", icon: "camera-outline",link: "/home-3" },
    { name: "Settings", icon: "settings-outline",link: "/home-3" },
  ];
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch(); 
  const [active, setActive] = useState(0);
  const isTab = useMediaQuery({ minWidth: 550 });

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className={`bg-[#F8F8F8] max-h-[4.8rem] border-[5px] border-gray-900 px-6 rounded-t-xl fixed bottom-0 left-0 w-full  ${
      isSidebarOpen? "z-10":"z-40"}`}>
      <ul className="flex relative">
         
        {Menus.map((menu, i) => (
          <li key={i} className="w-1/5 relative">
            {/* Red circle design */}
         {active === i && (
              <span className="bg-primary border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full z-0">
                <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[17.8px] rounded-tr-[9px] shadow-myShadow1"></span>
                <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[17.8px] rounded-tl-[9px] shadow-myShadow2"></span>
              </span>
            )}
            
            <Link
              to={menu.link}
              className={`flex flex-col text-center pt-5 ${
                isTab ? 'mr-12' : 'mr-6'
              }`}
              onClick={() => handleClick(i)}
            >
              {/* Icon */}
              <span
                className={`text-lg cursor-pointer duration-500 ${
                    active === i ? "-mt-6 text-white z-10" : ""
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              {/* Menu name */}
              <span
                className={`${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
              </Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
