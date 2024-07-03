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
    <div className="sm:max-w-[80%] w-[95%] mx-auto relative -mt-10 sm:-mt-32 z-20">
      <div className="bg-secondary dark:bg-black/30 sm:!bg-black/30 backdrop-blur-sm p-4 border border-slate-600 rounded-lg text-slate-100">
        <div className="flex-col mt-4 gap-x-4 flex-center-between  gap-y-4 md:gap-y-0 md:flex-row ">
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
