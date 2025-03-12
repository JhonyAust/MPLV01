import express from 'express';
import { createOrder, getPaintOrders, getPlansOrders, deleteOrder } from '../controllers/order.controller.js';
import { verifyToken, verifyAdmin } from '../utils/verifyUser.js';
import { updateOrderStatus } from '../controllers/order.controller.js';
import { getMyOrders } from '../controllers/order.controller.js';
const router = express.Router();

router.post('/create', createOrder);
router.get('/paint', getPaintOrders);
router.get('/plan', getPlansOrders);
router.delete('/:orderId', deleteOrder);
router.post('/update-status', updateOrderStatus);
router.get('/my-orders', getMyOrders);
router.get('/mypaint-orders', getPaintOrders);
router.get('/myplans-orders', getPlansOrders);

export default router;