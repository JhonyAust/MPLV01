import { BiBriefcase, BiMap, BiSort, BiSearch } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

const Filters = () => {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    sort: 'created_at',
    order: 'desc',
    location: '',
  });

  const [locations, setLocations] = useState([]);
  console.log(locations);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [activeButton, setActiveButton] = useState('Buy');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAILBOX_ACCESS_TOKEN;
  }, []);

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
    setLocations([]);
    setSelectedLocation(location);
  };
  const handleInputBlur = () => {
    setLocations([]);
  };
  

  const handleSearch = () => {
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    urlParams.set("location", sidebardata.location);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
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
    <div className="md:max-w-[80%] w-full mx-auto relative ">
      <div className="mt-6 flex justify-center">
          <div className="overflow-hidden rounded-t-md sm:cursor-pointer flex-align-center text-lg px-3 bg-white border dark:shadow-none w-fit dark:bg-card-dark  ">
            <div
              className={`px-12 py-2 cursor-pointer ${activeButton === 'Buy' ? 'text-primary font-bold border-b-4 border-primary' : ''}`}
              onClick={() => handleClick('Buy')}
            >
              <span>Buy</span>
            </div>
            <div className="border-r border-gray-300  h-full mx-2" ></div> {/* Vertical border line */}
            
            <div
              className={`px-12 py-2 cursor-pointer ${activeButton === 'Rent' ? 'text-primary font-bold border-b-4 border-primary' : ''}`}
              onClick={() => handleClick('Rent')}
            >
              <span>Rent</span>
            </div>
            <div className="border-r border-gray-300 h-full mx-2"></div> {/* Vertical border line */}
            <div
              className={`px-12 py-2 cursor-pointer ${activeButton === 'Commercial' ? 'text-primary font-bold border-b-4 border-primary' : ''}`}
              onClick={() => handleClick('Commercial')}
            >
              <span>Commercial</span>
            </div>
            
            <div className="border-r border-gray-300 h-full mx-2"></div> {/* Vertical border line */}
            <div
              className={`px-12 py-2 cursor-pointer ${activeButton === 'Land' ? 'text-primary font-bold border-b-4 border-primary' : ''}`}
              onClick={() => handleClick('Land')}
            >
              <span>Land</span>
            </div>
          </div>
        </div>


    <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
      <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  md:!bg-transparent">
              <h1 className="font-bold">Keywords</h1>
              <div className="flex-align-center gap-x-2">
                <BiSearch />
                <input
                  type="text"
                  id="searchTerm"
                  className="w-full bg-transparent border-0 outline-none"
                  placeholder="Enter keywords  . . ."
                  value={sidebardata.searchTerm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-300 hidden md:block"></div>
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  md:!bg-transparent">
              <h1 className="font-bold">Location</h1>
              <div className="flex-align-center gap-x-2 relative">
                <BiMap />
                <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="w-full bg-transparent border-0 outline-none"
                  placeholder="Enter location"
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
              </div>
              </div>
            </div>
          
          <div className="h-10 w-[1px] bg-slate-300 hidden md:block"></div>
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit  md:!bg-transparent">
              <h1 className="font-bold">Sort By</h1>
              <div className="flex-align-center gap-x-2">
                <BiSort  />
                <select
                  name=""
                  id="sort_order"
                  className="w-full bg-transparent border-0 outline-none text-slate-500"
                  onChange={handleChange}
                >
                  <option value="">Sort by</option>
                  <option value="createdAt_desc">Latest</option>
                  <option value="createdAt_asc">Oldest</option>
                  <option value="regularPrice_asc">Cheapest</option>
                  <option value="regularPrice_desc">Expensive</option>
                </select>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-300 hidden md:block"></div>
          </div>

          <div className="flex-1 w-full p-2 rounded-lg md:w-fit  md:!bg-transparent">
            <label htmlFor="type" className="font-bold">For</label>
            <div className="flex-align-center gap-x-2">
              <BiBriefcase />
              <select
                name=""
                id="type"
                className="w-full bg-transparent border-0 outline-none text-slate-500"
                onChange={handleChange}
              >
                <option value="all">For</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
          </div>
          <button className="w-full btn btn-primary md:w-fit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
