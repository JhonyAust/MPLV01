import React, { useEffect, useState } from 'react';

const OrderPaintWall = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/orders/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      const data = await response.json();
      setOrders(orders.filter(order => order._id !== orderId));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id} className="mb-4 p-4 border rounded">
              <h2 className="font-semibold">Order ID: {order._id}</h2>
              <p><strong>User:</strong> {order.user.username} ({order.user.email})</p>
              <p><strong>Total Amount:</strong> {order.totalAmount} BDT</p>
              <div>
                <h3 className="font-bold">Items:</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.title} - {item.newCost} BDT
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Shipping Details:</h3>
                <p>Name: {order.shippingDetails.name}</p>
                <p>Email: {order.shippingDetails.email}</p>
                <p>Phone Number: {order.shippingDetails.phoneNumber}</p>
                <p>Address: {order.shippingDetails.address}</p>
                <p>Message: {order.shippingDetails.message}</p>
                <p>Agreed to Terms: {order.shippingDetails.agreeTerms ? 'Yes' : 'No'}</p>
              </div>
              <button
                className="mt-4 bg-red-500 text-white p-2 rounded"
                onClick={() => handleDelete(order._id)}
              >
                Delete Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPaintWall;
