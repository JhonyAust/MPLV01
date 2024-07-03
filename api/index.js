import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import orderPaintWallRouter from './routes/orderPaintWall.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');

    })
    .catch((err) => {
        console.log(err);
    });

// .connect(process.env.MONGO)
//     .then(async() => {
//         console.log('Connected to MongoDB!');

//         try {
//             // Update all users to have a role of 'user'
//             const result = await User.updateMany({}, { $set: { role: 'user' } });
//             console.log(`Updated ${result.nModified} users to have a role of 'user'`);
//         } catch (error) {
//             console.error('Error updating user roles:', error);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use('/api/orders', orderPaintWallRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    })
    // Serve admin dashboard application
app.use('/admin', express.static(path.join(__dirname, '../admin-dashboard/dist')));
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin-dashboard/dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message + ("have understand") || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});