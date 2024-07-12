import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Typography, Spinner } from '@material-tailwind/react';
import { setOrdersPaintWall, deleteOrdersPaintWall } from '../../features/listingsSlice';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { removeNotificationByOrderId } from '../../features/nfcSlice';

const OrderList = ({ orders, onToggle, onDelete }) => (
  <div className="space-y-4">
    {orders.map((order) => (
      <Card key={order._id} className="p-4 border-b border-gray-200">
        <CardBody>
          <div className="space-y-2">
            <Typography variant="h6">Order ID: {order._id}</Typography>
            <Typography>User: {order.user.username} ({order.user.email})</Typography>
            <Typography>Total Amount: {order.totalAmount} BDT</Typography>
            <Button
              style={{ background: 'transparent' }}
              size="small"
              onClick={() => onToggle(order._id)}
            >
              {order.expanded ? (
                <ChevronUpIcon className="w-5 h-5 text-black font-bold" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-black font-bold" />
              )}
            </Button>
            {order.expanded && (
              <div className="mt-4 space-y-2">
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
          <Button variant="text" color="red" onClick={() => onDelete(order._id)}>
            Delete Order
          </Button>
        </CardBody>
      </Card>
    ))}
  </div>
);

const OrderDetail = ({ order }) => (
  <div>
    <Typography variant="h4" className='mb-6'>Order Details</Typography>
    <Card key={order._id} className="p-4 border-b border-gray-200">
      <CardBody>
        <div className="space-y-2">
          <Typography variant="h6">Order ID: {order._id}</Typography>
          <Typography>User: {order.user.username} ({order.user.email})</Typography>
          <Typography>Total Amount: {order.totalAmount} BDT</Typography>
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
      </CardBody>
    </Card>
  </div>
);

const OrderPaintWall = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.listings.ordersPaintWall);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

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
      dispatch(removeNotificationByOrderId(orderId));
    } catch (error) {
      setError(error.message || 'Failed to delete order');
    }
    setLoading(false);
  };

  const toggleOrderDetails = (orderId) => {
    const updatedOrders = ordersState.map((order) => {
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
    <OrderDetail order={order} />
  );

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Typography color="red">{error}</Typography>;
    } else if (ordersState.length === 0) {
      return <Typography>No orders available.</Typography>;
    } else {
      if (orderId) {
        const order = ordersState.find((order) => order._id === orderId);
        if (order) {
          return renderOrderDetails(order);
        } else {
          return <Typography color="red">Order not found.</Typography>;
        }
      } else {
        const indexOfLastOrder = currentPage * itemsPerPage;
        const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
        const currentOrders = ordersState.slice(indexOfFirstOrder, indexOfLastOrder);

        const totalPages = Math.ceil(ordersState.length / itemsPerPage);

        return (
          <div>
            <Typography variant="h4" className='mb-6'>All Orders</Typography>
            <OrderList orders={currentOrders} onToggle={toggleOrderDetails} onDelete={handleDeleteOrder} />
            <div className="flex justify-between mt-4">
              <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                Previous
              </Button>
              <Typography>
                Page {currentPage} of {totalPages}
              </Typography>
              <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </div>
        );
      }
    }
  };

  return <div className="p-6">{renderContent()}</div>;
};

export default OrderPaintWall;
