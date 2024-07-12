// orderPaintWall.controller.js

import OrderPaintWall from '../models/orderPaintWall.model.js';
import { io } from '../index.js';
import { errorHandler } from '../utils/error.js';


export const createOrder = async (req, res, next) => {
    try {
        const { user, items, totalAmount, shippingDetails } = req.body;
        const newOrder = new OrderPaintWall({
            user,
            items,
            totalAmount,
            shippingDetails,
        });
        const savedOrder = await newOrder.save();
        
        // Emit the event to notify admin
        io.emit('newOrder', { order: savedOrder });

        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await OrderPaintWall.find().populate('user', 'username email');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const deleteOrder = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const deletedOrder = await OrderPaintWall.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return next(errorHandler(404, 'Order not found!'));
        }

        res.status(200).json({ message: 'Order deleted successfully!' });
    } catch (error) {
        next(error);
    }
};
