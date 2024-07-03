import express from 'express';
import { createOrder, getAllOrders, deleteOrder } from '../controllers/orderPaintWall.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/create', createOrder);
router.get('/all', verifyToken, getAllOrders);
router.delete('/:orderId', verifyToken, deleteOrder);

export default router;