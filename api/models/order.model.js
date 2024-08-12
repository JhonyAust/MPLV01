import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
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
    type: {
        type: String,
        required: true,
    },
    status: { 
        type: String, 
        enum: ['Order Received', 'In-Person Consultaion','Confirmed', 'Completed', 'Cancelled'],
        default: 'Order Received' 
     },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;