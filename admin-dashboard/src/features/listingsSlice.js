import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listings: [],
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
    },
});

export const { setListings, deleteListing } = listingsSlice.actions;
export default listingsSlice.reducer;