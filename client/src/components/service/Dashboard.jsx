import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const Box = ({ icon, title, to }) => {
  return (
    <Link to={to} className="text-black">
      <div className="bg-white border rounded-lg p-2 m-1 flex flex-col justify-between w-32 sm:w-30 md:w-40 lg:w-48">
        <div className="flex justify-center items-center h-16">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="text-center mt-1">
          <p className="font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center md:hidden">
      {/* Top header */}
      <div className="flex justify-between w-full mt-8 mb-4 tracking-wide">
        <h2 className="text-2xl font-bold">Services for you</h2>
        <div className="flex items-center">
          <Link to="/service" className="text-blue-500 font-bold tracking-wide hover:underline mr-2">
            See All
          </Link>
          <span className="text-blue-500 hover:text-blue-600 text-xl">
            <BiChevronRight/>
          </span>
        </div>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        <Box icon="📊" title="Analytics" to="/analytics" />
        <Box icon="💼" title="Projects" to="/projects" />
        <Box icon="📅" title="Calendar" to="/calendar" />
        <Box icon="📫" title="Inbox" to="/inbox" />
        <Box icon="💡" title="Ideas" to="/ideas" />
        <Box icon="🔧" title="Settings" to="/settings" />
        <Box icon="📂" title="Files" to="/files" />
        <Box icon="📝" title="Notes" to="/notes" />
      </div>
    </div>
  );
};

export default Dashboard;
