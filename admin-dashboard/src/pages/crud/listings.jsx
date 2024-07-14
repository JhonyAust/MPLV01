import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  Typography,
  Spinner,
  Avatar,
} from '@material-tailwind/react';
import { setListings, deleteListing, approveListing } from '../../features/listingsSlice';

const ListingPage = () => {
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.listings);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { currentAdmin } = useSelector((state) => state.admin);
  const listingsPerPage = 5;

  useEffect(() => {
    const fetchListings = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/listing/getAll', {
                headers: {
                    'Content-Type': 'application/json',
                    'Current-Admin': JSON.stringify(currentAdmin), // Include currentAdmin in headers
                },
            });
            const data = await res.json();
            if (data.success === false) {
                setError(data.message);
            } else {
                dispatch(setListings(data));
            }
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    fetchListings();
}, [currentAdmin, dispatch]);

  const handleDeleteListing = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/listing/delete/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        dispatch(deleteListing(id));
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleApproveListing = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/listing/approve/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Current-Admin': JSON.stringify(currentAdmin), // Include currentAdmin in headers
      },
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        dispatch(approveListing(data));
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

  const totalPages = Math.ceil(listings.length / listingsPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4">All Listings</Typography>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Typography color="red">{error}</Typography>
      ) : (
        <div>
          <div className="space-y-4">
            {currentListings.map((listing) => (
              <Card key={listing._id} className="p-4 border-b border-gray-200">
                <CardBody className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar src={listing.imageUrls[0]} alt="listing image" className="w-12 h-12 mr-4" />
                    <div>
                      <Typography variant="h6" className="mb-1">
                        {listing.name}
                      </Typography>
                      <Typography className="text-gray-600">
                        {listing.userRef}
                      </Typography>
                      <Typography className="text-gray-600">
                        Approved: {listing.isApproved ? 'Yes' : 'No'}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {!listing.isApproved && (
                      <Button
                        variant="text"
                        color="green"
                        onClick={() => handleApproveListing(listing._id)}
                      >
                        Approve
                      </Button>
                    )}
                     {listing.isApproved && (
                      <Button
                        variant="text"
                        color="green"
                        onClick={() => handleApproveListing(listing._id)}
                      >
                        Decline
                      </Button>
                    )}
                    <Button variant="text" color="red" onClick={() => handleDeleteListing(listing._id)}>
                      Delete
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Typography>
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingPage;
