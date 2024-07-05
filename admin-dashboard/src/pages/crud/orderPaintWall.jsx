import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Typography, Spinner } from '@material-tailwind/react';
import { setOrdersPaintWall, deleteOrdersPaintWall } from '../../features/listingsSlice';
import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/solid';

const OrderPaintWall = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector(state => state.listings.ordersPaintWall);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of orders per page

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/orders/all');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        dispatch(setOrdersPaintWall(data));
      } catch (error) {
        setError(error.message || 'Failed to fetch orders');
      }
      setLoading(false);
    };

    fetchOrders();
  }, [dispatch]);

  const handleDeleteOrder = async (orderId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      dispatch(deleteOrdersPaintWall(orderId));
    } catch (error) {
      setError(error.message || 'Failed to delete order');
    }
    setLoading(false);
  };

  const toggleOrderDetails = (orderId) => {
    const updatedOrders = ordersState.map(order => {
      if (order._id === orderId) {
        return {
          ...order,
          expanded: !order.expanded,
        };
      }
      return order;
    });
    dispatch(setOrdersPaintWall(updatedOrders));
  };

  const renderOrderDetails = (order) => (
    <div className="space-y-2">
      {/* Always visible details */}
      <Typography variant="h6">Order ID: {order._id}</Typography>
      <Typography>User: {order.user.username} ({order.user.email})</Typography>
      <Typography>Total Amount: {order.totalAmount} BDT</Typography>

      <Button
          style={{ background: 'transparent' }} // Set background to transparent
          size="small"
          onClick={() => toggleOrderDetails(order._id)}
        >
          {order.expanded ? (
            <ChevronUpIcon className="w-5 h-5 text-black font-bold" /> // Black color and bold font
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-black font-bold" /> // Black color and bold font
          )}
        </Button>

      {/* Expanded details */}
      {order.expanded && (
        <div className="mt-4 space-y-2">
          {/* Display all other details */}
          <Typography variant="subtitle">Items:</Typography>
          <ul className="list-disc pl-4 mb-2">
            {order.items.map((item, index) => (
              <li key={index}>
                {item.title} - {item.newCost} BDT
              </li>
            ))}
          </ul>
          <Typography variant="subtitle">Shipping Details:</Typography>
          <Typography>Name: {order.shippingDetails.name}</Typography>
          <Typography>Email: {order.shippingDetails.email}</Typography>
          <Typography>Phone Number: {order.shippingDetails.phoneNumber}</Typography>
          <Typography>Address: {order.shippingDetails.address}</Typography>
          <Typography>Message: {order.shippingDetails.message}</Typography>
          <Typography>Agreed to Terms: {order.shippingDetails.agreeTerms ? 'Yes' : 'No'}</Typography>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Typography color="red">{error}</Typography>;
    } else if (ordersState.length === 0) {
      return <Typography>No orders available.</Typography>;
    } else {
      // Calculate current orders to display based on pagination
      const indexOfLastOrder = currentPage * itemsPerPage;
      const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
      const currentOrders = ordersState.slice(indexOfFirstOrder, indexOfLastOrder);

      const totalPages = Math.ceil(ordersState.length / itemsPerPage);

      return (
        <div>
          <Typography variant="h4" className='mb-6'>All Orders</Typography>
          <div className="space-y-4">
            {currentOrders.map((order) => (
              <Card key={order._id} className="p-4 border-b border-gray-200">
                <CardBody>
                  {renderOrderDetails(order)}
                  {/* Delete button */}
                  <Button
                    variant="text"
                    color="red"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete Order
                  </Button>
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
      );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
};

export default OrderPaintWall;
