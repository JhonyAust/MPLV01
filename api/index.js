// index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import orderPaintWallRouter from './routes/orderPaintWall.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { Server } from 'socket.io';
import http from 'http';
import Listing from './models/listing.model.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(async() => {
        console.log('Connected to MongoDB!');
         // Update listings to include isApproved property
    try {
        const listings = await Listing.find();
        for (const listing of listings) {
            if (listing.isApproved === undefined) {
                listing.isApproved = false; // Set default value for isApproved
                await listing.save();
                console.log(`Updated listing with ID: ${listing._id}`);
            }
        }
        console.log('All listings updated successfully');
    } catch (error) {
        console.error('Error updating listings:', error.message);
    }
    })
    .catch((err) => {
        console.log(err);
    });

const __dirname = path.resolve();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/orders', orderPaintWallRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use('/admin', express.static(path.join(__dirname, '../admin-dashboard/dist')));
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin-dashboard/dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

export { io };
