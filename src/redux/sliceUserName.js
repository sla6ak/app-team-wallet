import { createSlice } from '@reduxjs/toolkit';

const initialUser = '';

export const curentUser = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        isUserName(_state, action) {
            return action.payload;
        },
    },
});

export const { isUserName } = curentUser.actions;
