import React, { useState,useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
const Step1 = ({ onNext, onFormData }) => {
  const [formData, setFormData] = useState({
    location: '',
    // Add more fields as needed
  });
  const [addressLocations, setAddressLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAILBOX_ACCESS_TOKEN;
  }, []);
  const handleAddressSearch = (input) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?limit=10&access_token=${mapboxgl.accessToken}&country=BD&bbox=88.084422235,20.738313768,92.673888084,26.6398490704`)
      .then(response => response.json())
      .then(data => {
        if (data && data.features) {
          setAddressLocations(data.features);
        }
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  };
  const handleLocationSelect = (address) => {

    
    setFormData({ ...formData, address });
    
   
    setSelectedLocation(address);
    
   
   
  };
  const handleInputBlur = () => {
    setAddressLocations([]);
  };

  const handleChange = (e) => {
    if (e.target.id === 'address') {
        setSelectedLocation(e.target.value);
        handleAddressSearch(e.target.value);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.location.trim() === '') {
      alert('Please enter a location.');
      return;
    }
    // Pass form data to parent component
    onFormData({ step1Data: formData });
    onNext(); // Proceed to next step
  };

  return (
    <form onSubmit={handleSubmit}>

    <div className="relative ">
        <h1 className='text-lg  text-gray-700 mb-4 mt-20 '>Allocate Service Area</h1>
            <input
                type='text'
                placeholder='Address'
                className='border p-3 rounded-lg w-full'
                id='address'
                required
                value={selectedLocation}
                    onChange={(e) => {
                        handleChange(e);
                        handleAddressSearch(e.target.value);
                    }}
                    onBlur={handleInputBlur}
                    />
                    {addressLocations.length > 0 && (
                    <ul className="absolute left-0 z-50  bg-white border border-gray-500 w-60 mt-1 rounded-md overflow-auto max-h-40 shadow-lg">
                    {addressLocations.map((location) => (
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
                    )}
                    </div>
      
    </form>
  );
};

export default Step1;
