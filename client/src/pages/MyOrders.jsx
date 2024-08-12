// pages/MyOrders.jsx
import React, { useEffect, useState } from 'react';
import OrderProgress from '../components/Order/OrderProgress';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/orders/my-orders');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Response Data", data);
                setOrders(data);
            
            } catch (error) {
                setError('Failed to fetch orders');
                console.error('Failed to fetch orders', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8 mt-10">
            <h1 className="text-xl font-bold my-4">My Orders</h1>
            {orders && orders.length === 0 ? (
                <div>No orders found</div>
            ) : (
                orders && orders.map((order) => (
                    <div key={order._id} className="p-4 mb-4 border rounded-lg shadow-sm">
                        <h2 className="text-md font-semibold mb-2">Order #{order._id}</h2>
                        <OrderProgress status={order.status} />
                        <div className="mt-4 text-md">
                        <p variant="subtitle">Items:</p>
                        <p>{order.planName}</p>
                        {order.items?(
                        <ul className="list-disc pl-4 mb-2">
                            {order.items.map((item, index) => (
                                <li key={index}>
                                {item.title} - {item.newCost} BDT
                                </li>
                            ))}
                        </ul>
                        ):(
                            <p>{order.planName}</p>
                        )}
                            <p className="font-semibold">Total Amount: ${order.totalAmount}</p>
                            <p className="font-semibold py-1">Shipping Details:</p>
                            <ul className=" font-mono text-sm  list-disc list-inside">
                                <li>Name: {order.shippingDetails.name}</li>
                                <li>Email: {order.shippingDetails.email}</li>
                                <li>Phone Number: {order.shippingDetails.phoneNumber}</li>
                                <li>Address: {order.shippingDetails.address}</li>
                                {order.shippingDetails.message && <li>Message: {order.shippingDetails.message}</li>}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrders;
