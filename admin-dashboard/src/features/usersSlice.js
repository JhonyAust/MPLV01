// src/features/usersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        addUser(state, action) {
            state.users.push(action.payload);
        },
        deleteUser(state, action) {
            state.users = state.users.filter(user => user._id !== action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setUsers, addUser, deleteUser, setLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;