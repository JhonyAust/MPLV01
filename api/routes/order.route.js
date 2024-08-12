import express from 'express';
import { createOrder, getPaintOrders, getPlansOrders, deleteOrder } from '../controllers/order.controller.js';
import { verifyToken, verifyAdmin } from '../utils/verifyUser.js';
import { updateOrderStatus } from '../controllers/order.controller.js';
import { getMyOrders } from '../controllers/order.controller.js';
const router = express.Router();

router.post('/create', createOrder);
router.get('/paint', verifyToken, getPaintOrders);
router.get('/plan', verifyToken, getPlansOrders);
router.delete('/:orderId', verifyToken, deleteOrder);
router.post('/update-status',updateOrderStatus);
router.get('/my-orders', verifyToken, getMyOrders);
router.get('/mypaint-orders', verifyToken, getPaintOrders);
router.get('/myplans-orders', verifyToken, getPlansOrders);

export default router;