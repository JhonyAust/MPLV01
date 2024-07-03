import ListingItem from "./ListingItem";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductCard from "./SingleProductCard";

const Featured = () => {
  const [rentListings, setRentListings] = useState([]);
  console.log(rentListings);

  useEffect(() => {
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRentListings();
  }, []);

  return (
    <div className="pt-10 pb-16">
      {rentListings && rentListings.length > 0 && (
        <div >
          <div className="text-center">
            <h1 className="mx-auto sub-heading">featured</h1>
            <h1 className="heading">explore featured latest properties</h1>
          </div>
          <div className="flex flex-wrap gap-4  mt-8 md:flex-nowrap">
            {rentListings.map((listing) => (
              <div className="w-full md:w-1/3 lg:w-1/2" key={listing._id}>
              <SingleProductCard listing={listing} />
            </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
