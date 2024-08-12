import Order from '../models/order.model.js';
import { io } from '../index.js';
import { errorHandler } from '../utils/error.js';


export const createOrder = async(req, res, next) => {
    try {
        const { user, items, totalAmount, shippingDetails,type } = req.body;
        const newOrder = new Order({
            user,
            items,
            totalAmount,
            shippingDetails,
            type,
        });
        const savedOrder = await newOrder.save();

        // Emit the event to notify admin
        io.emit('newOrder', { order: savedOrder });

        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};

export const getPaintOrders = async(req, res, next) => {
    try {
        const orders = await Order.find({ type: 'paint' }).populate('user', 'username email');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getPlansOrders = async(req, res, next) => {
    try {
        const orders = await Order.find({ type: 'plan' }).populate('user', 'username email');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};


export const updateOrderStatus = async (req, res, next) => {
    try {
        const { orderId, status } = req.body;
        // Validate the input
        if (!orderId || !status) {
            return res.status(400).json({ message: 'orderId and status are required.' });
        }
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!updatedOrder) {
            return next(new Error('Order not found!'));
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
};


export const deleteOrder = async(req, res, next) => {
    try {
        const { orderId } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return next(errorHandler(404, 'Order not found!'));
        }

        res.status(200).json({ message: 'Order deleted successfully!' });
    } catch (error) {
        next(error);
    }
};

export const getMyOrders = async (req, res, next) => {
    try {
        const {userId} = req.user.id;
        console.log("User Order ID is:",req.user);
        const orders = await Order.find({ userId});
        console.log("Order Id is :",orders);
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getMyPaintOrders = async (req, res, next) => {
    try {
        const { userId } = req.user; // Assuming req.user contains the user ID directly
        console.log("User Order ID is:", userId);

        // Fetch orders where type is 'paint'
        const orders = await Order.find({ userId, type: 'paint' });
        console.log("Filtered Orders:", orders);

        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getMyPlansOrders = async (req, res, next) => {
    try {
        const { userId } = req.user; // Assuming req.user contains the user ID directly
        console.log("User Order ID is:", userId);

        // Fetch orders where type is 'paint'
        const orders = await Order.find({ userId, type: 'plan' });
        console.log("Filtered Orders:", orders);

        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};
