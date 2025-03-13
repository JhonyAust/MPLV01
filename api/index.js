import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import orderRouter from './routes/order.route.js';
import listingRouter from './routes/listing.route.js';
import projectRouter from './routes/project.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

dotenv.config();

mongoose
    .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch((err) => console.log('❌ MongoDB Connection Error:', err));

const __dirname = path.resolve();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://www.broker-free.com', 'https://admin.broker-free.com'], // ✅ Allow only your frontends
        credentials: true, // ✅ Allow cookies in WebSocket
    },
});

//  Apply Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['https://www.broker-free.com', 'https://admin.broker-free.com'], // ✅ Allowed Origins
    credentials: true, // ✅ Allow Cookies in Requests
}));

//  API Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/orders', orderRouter);
app.use('/api/project', projectRouter);

//  Default Route
app.get('/', (req, res) => {
    res.send('🚀 API is running successfully!');
});

//  Serve Static Files for Client & Admin Dashboard
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use('/admin', express.static(path.join(__dirname, 'admin-dashboard/dist')));

//  Handle Client SPA (Single Page Application) Routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

//  Handle Admin Dashboard SPA Routing
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard/dist', 'index.html'));
});

//  Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// WebSockets (Socket.io)
io.on('connection', (socket) => {
    console.log('🟢 A user connected');
    socket.on('disconnect', () => {
        console.log('🔴 User disconnected');
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});

export { io };