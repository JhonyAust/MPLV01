import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { title, newCost } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.title === title);
            if (existingItemIndex !== -1) {
                // Item already exists in cart, update its newCost
                state.cartItems[existingItemIndex].newCost += parseFloat(newCost.replace('৳', '').replace(',', '').trim());
            } else {
                // Item not found in cart, add it as a new item
                state.cartItems.push({ title, newCost: parseFloat(newCost.replace('৳', '').replace(',', '').trim()), actualcost: parseFloat(newCost.replace('৳', '').replace(',', '').trim()) });
            }
            // Update total amount
            state.totalAmount += parseFloat(newCost.replace('৳', '').replace(',', '').trim());
        },
        removeFromCart(state, action) {
            const { title, newCost } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.title === title);
            if (existingItemIndex !== -1) {
                // Item exists in cart, update its newCost
                state.cartItems[existingItemIndex].newCost -= parseFloat(newCost.replace('৳', '').replace(',', '').trim());
                // If new cost becomes <= 0, remove the item from cart
                if (state.cartItems[existingItemIndex].newCost <= 0) {
                    state.cartItems.splice(existingItemIndex, 1);
                }
                // Update total amount
                state.totalAmount -= parseFloat(newCost.replace('৳', '').replace(',', '').trim());
            }
        },
        // Add other reducers as needed
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;