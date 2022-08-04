import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
const initialUser = 'ddd'; //тут будем хранить актуальное имя пользователя
=======
const initialUser = ''; //тут будем хранить актуальное имя пользователя
>>>>>>> adbc520d467d58d0f661c777939020061c8f41aa

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
