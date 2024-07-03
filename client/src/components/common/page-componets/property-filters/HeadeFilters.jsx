import React from "react";
import { FaList } from "react-icons/fa";
import { FiFilter, FiGrid } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';


const HeadeFilters = ({ layout, setLayout,l_size,pag, onSearchTermChange,onLocationChange, onSortOrderChange,currentPage}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    location: '',
  });
  const [locations, setLocations] = useState([]);
  console.log(locations);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAILBOX_ACCESS_TOKEN;
  }, []);
  
  const startIndex = (currentPage - 1) * pag + 1;
  const endIndex = Math.min(currentPage * pag, l_size);
  const handleChange = (e) => {
    if (e.target.id === 'type' || e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, [e.target.id]: e.target.value });
    }

    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';
      const order = e.target.value.split('_')[1] || 'desc';
      setSidebardata({ ...sidebardata, sort, order });
    }

    if (e.target.id === 'location') {
      setSelectedLocation(e.target.value);
      handlePlaceSearch(e.target.value);
    }
  };
  
    const handleLocationSelect = (location) => {
      setSidebardata({ ...sidebardata, location });
      onLocationChange(location);
      setLocations([]);
      setSelectedLocation(location);
    };
    const handleInputBlur = () => {
      setLocations([]);
    };
    const handlePlaceSearch = (input) => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?limit=10&access_token=${mapboxgl.accessToken}&country=BD&bbox=88.084422235,20.738313768,92.673888084,26.6398490704`)
        .then(response => response.json())
        .then(data => {
          if (data && data.features) {
            setLocations(data.features);
          }
        })
        .catch(error => {
          console.error('Error fetching location data:', error);
        });
    };
  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full flex-center-between">
        <div className="gap-2 flex-align-center">
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark  ${
              layout === "grid" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("grid")}
          >
            <FiGrid />
          </div>
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark ${
              layout === "list" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("list")}
          >
            <FaList />
          </div>
          <div
            className="grid w-10 h-10 md:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark"
            onClick={() => dispatch(openFilterMenu())}
          >
            <FiFilter />
          </div>
        </div>
        <p>Showing {startIndex} - {endIndex} of {l_size} results</p>
      </div>
      <div className="w-full gap-4 flex-center-between">
        <select
          name=""
          id="sort_order"
          className="w-40 px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
          onChange={(e) => onSortOrderChange(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="createdAt_desc">Latest</option>
          <option value="createdAt_asc">Oldest</option>
          <option value="regularPrice_asc">Cheapest</option>
          <option value="regularPrice_desc">Expensive</option>
        </select>
        
        <div className="relative flex-grow">
          <input
            type="text"
            id='location'
            className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-45 pl-10"
            placeholder="Enter location.."
            value={selectedLocation}
                  onChange={(e) => {
                    handleChange(e);
                    handlePlaceSearch(e.target.value);
                  }}
                  onBlur={handleInputBlur}
                />
                <ul className="absolute left-0 z-10 bg-white  border-gray-300 w-full mt-1 rounded-md overflow-auto max-h-40 shadow-lg">
                  {locations.map((location) => (
                    <li
                      key={location.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleLocationSelect(location.place_name);
                      }}
                      className="cursor-pointer p-2 hover:bg-blue-400 text-gray-400 hover:text-white whitespace-nowrap"
                    >
                      {location.place_name}
                    </li>
                  ))}
                </ul>
          <BiMap className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
        </div>
        <input
          type="text"
          id='searchTerm'
          className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-45"
          placeholder="Enter Keywords.."
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HeadeFilters;
