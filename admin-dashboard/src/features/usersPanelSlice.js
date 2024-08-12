
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  ordersPaintWall: [],
  ordersPlans: [],
  ordersList: [],
};

const usersPanelSlice = createSlice({
  name: 'usersPanel',
  initialState,
  reducers: {
    setListings(state, action) {
      state.listings = action.payload;
    },
    deleteListing(state, action) {
      state.listings = state.listings.filter(listing => listing._id !== action.payload);
    },
    approveListing(state, action) {
      state.listings = state.listings.map(listing =>
          listing._id === action.payload._id ? { ...listing, isApproved: true } : listing
      );
    },
    setOrdersPaintWall(state, action) {
      state.ordersPaintWall = action.payload;
    },
    deleteOrdersPaintWall(state, action) {
      state.ordersPaintWall = state.ordersPaintWall.filter(order => order._id !== action.payload);
    },
    setOrdersPlans(state, action) {
      state.ordersPlans = action.payload;
    },
    deleteOrdersPlans(state, action) {
      state.ordersPlans = state.ordersPlans.filter(order => order._id !== action.payload);
    },
    setOrdersList(state, action) {
        state.ordersList = action.payload;
      },
      deleteOrdersList(state, action) {
        state.ordersList = state.ordersList.filter(order => order._id !== action.payload);
      },
  },
});

export const { setListings, deleteListing, setOrdersPaintWall, deleteOrdersPaintWall,approveListing,setOrdersPlans,deleteOrdersPlans,setOrdersList,deleteOrdersList} = usersPanelSlice.actions;
export default usersPanelSlice.reducer;
