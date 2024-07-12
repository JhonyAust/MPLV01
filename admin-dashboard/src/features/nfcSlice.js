// src/features/nfcSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nfc: [],
    newItemAdded: false,
};

const nfcSlice = createSlice({
    name: 'nfcSlice',
    initialState,
    reducers: {
        addNotification(state, action) {
            if (state.nfc.length >= 10) {
                state.nfc.shift(); // Remove the oldest notification if there are already 10 notifications
            }
            state.nfc.push(action.payload);
            state.newItemAdded = true; // Set newItemAdded to true
        },
        removeNotification(state, action) {
            state.nfc.splice(action.payload, 1);
        },
        clearNotifications(state) {
            state.newItemAdded = false; // Reset newItemAdded when clearing notifications
        },
        removeNotificationByOrderId: (state, action) => {
            state.nfc = state.nfc.filter(notification => notification.orderId !== action.payload);
        },
    },
});

export const { addNotification, removeNotification, clearNotifications, removeNotificationByOrderId } = nfcSlice.actions;

export default nfcSlice.reducer;