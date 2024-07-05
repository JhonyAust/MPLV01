// store/listingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  ordersPaintWall: [],
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings(state, action) {
      state.listings = action.payload;
    },
    deleteListing(state, action) {
      state.listings = state.listings.filter(listing => listing._id !== action.payload);
    },
    setOrdersPaintWall(state, action) {
      state.ordersPaintWall = action.payload;
    },
    deleteOrdersPaintWall(state, action) {
      state.ordersPaintWall = state.ordersPaintWall.filter(order => order._id !== action.payload);
    },
  },
});

export const { setListings, deleteListing, setOrdersPaintWall, deleteOrdersPaintWall } = listingsSlice.actions;
export default listingsSlice.reducer;
