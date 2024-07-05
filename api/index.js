import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import orderPaintWallRouter from './routes/orderPaintWall.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { WebSocketServer } from 'ws'; // Add this line

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());

// Initialize WebSocket server
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

const wss = new WebSocketServer({ server });

let clients = [];

wss.on('connection', (ws) => {
    clients.push(ws);

    ws.on('close', () => {
        clients = clients.filter((client) => client !== ws);
    });
});

const notifyAdmins = (message) => {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

// Middleware to add notifyAdmins to request
app.use((req, res, next) => {
    req.notifyAdmins = notifyAdmins;
    next();
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/orders', orderPaintWallRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Serve admin dashboard application
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
