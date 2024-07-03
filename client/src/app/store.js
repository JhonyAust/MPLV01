import dataReducer from "../features/dataSlice";
import uiReducer from "../features/uiSlice";
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    ui: uiReducer,
    data: dataReducer,
    user: userReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);