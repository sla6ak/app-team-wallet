import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from './authAPI';
import { curentToken } from './sliceToken'; // root reduser для токена
import { curentUser } from './sliceUserName'; // будет хранить имя актуального пользователя и предоставлять доступ к функционалу
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// ***********************работа с локалкой*********************************
// https://www.youtube.com/watch?v=sdlYNKjCGU0 гайд по локалке
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const tokenPersistConfig = {
    key: 'root', //это ключь под которым мы сохраняем сторе
    storage,
    whitelist: ['token'], // этот массив ключей вытягивает уже из slice конкретно то что нужно сохранять в ключе выше
};

const rootReduser = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    token: curentToken.reducer,
    userName: curentUser.reducer,
});
const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);
// *************************************************

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authApi.middleware),
});

export const persistor = persistStore(store); // это параметры для обертки приложения в индексе
