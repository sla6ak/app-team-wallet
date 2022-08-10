import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authAPI';
import { curentToken } from './sliceToken';
import { curentUser } from './sliceUserName';
import { transactionApi } from './transactionAPI';
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const tokenPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const rootReduser = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    token: curentToken.reducer,
    userName: curentUser.reducer,
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(authApi.middleware)
            .concat(transactionApi.middleware),
});

export const persistor = persistStore(store);
