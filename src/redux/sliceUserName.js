import { createSlice } from '@reduxjs/toolkit';

const initialUser = 'qwe'; //тут будем хранить актуальное имя пользователя

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
