import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings, getAllListings,approveListing} from '../controllers/listing.controller.js';
import { verifyAdmin, verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);
router.get('/getAll', getAllListings);
router.patch('/approve/:id', verifyAdmin, approveListing);

export default router;