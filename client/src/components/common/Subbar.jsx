import React from "react";
import { Link } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
const Subbar = () => {
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch(); 
  return (
    <div className={`flex justify-center fixed w-full top-[45px] ${isSidebarOpen? "z-10":"z-40"}`}>
      {/* White Rounded Section */}
      <div className="rounded-full bg-white flex shadow-md">
        {/* Property Search */}
        <div className="rounded-full m-1 bg-[#FD3752]">
          <Link
            to="/search"
            className="flex items-center px-4 py-2 text-[#FFFF]"
          >
            <TbHomeSearch className=" text-lg mr-2" />
            <span className="font-bold tracking-wide  text-sm">Property Search</span>
          </Link>
        </div>
        {/* Home Services */}
        <Link
          to="/home-services"
          className="flex items-center px-4 py-2 rounded-r-full"
        >
          <MdOutlineMiscellaneousServices className="text-black text-lg mr-2" />
          <span className="font-bold tracking-wide text-sm">Home Services</span>
        </Link>
      </div>
    </div>
  );
};

export default Subbar;
