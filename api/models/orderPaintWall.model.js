import mongoose from 'mongoose';

const OrderPaintWallSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        title: String,
        newCost: Number,
        quantity: Number,
    }],
    totalAmount: {
        type: Number,
        required: true,
    },
    shippingDetails: {
        name: String,
        email: String,
        phoneNumber: String,
        address: String,
        message: String,
        agreeTerms: Boolean,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const OrderPaintWall = mongoose.model('Order', OrderPaintWallSchema);

export default OrderPaintWall;