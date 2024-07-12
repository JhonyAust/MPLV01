// src/store/adminStore.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import adminReducer from '../features/adminSlice';
import listingsReducer from '../features/listingsSlice';
import usersReducer from '../features/usersSlice'; // Import the new users reducer
import nfcSliceReducer from '@/features/nfcSlice';
const adminPersistConfig = {
    key: 'admin',
    storage,
    version: 1,
    whitelist: ['admin', 'listings', 'users','nfcSlice'],
};

const rootReducer = combineReducers({
    admin: adminReducer,
    listings: listingsReducer,
    users: usersReducer, // Include the new users reducer
    nfcSlice:nfcSliceReducer
});

const persistedReducer = persistReducer(adminPersistConfig, rootReducer);

export const adminStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const adminPersistor = persistStore(adminStore);