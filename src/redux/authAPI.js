import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        //тут я создаю базовый хедерс для всех запросов вытягивая токен из стейта на любой глубине.
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['user'],
    endpoints: builder => ({
        //запрос для регистрации нового пользователя ожидает тело в виде JSON объекта.
        //     {
        //   "name": "Adrian Cross",
        //   "email": "across@mail.com",
        //   "password": "examplepassword"
        // }
        registrationUser: builder.mutation({
            query: newUser => ({
                url: '/auth/signup',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['user'],
        }),

        //запрос получение нового токена для работы пользователя с бэкендом
        //     {
        //   "email": "string",
        //   "password": "string"
        // }
        loginUser: builder.mutation({
            query: userData => ({
                url: `/auth/login`,
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['user'],
        }),

        //запрос который удаляет актуальный токен выданый пользователю на бекенде
        unLoginUser: builder.mutation({
            query: () => ({
                url: `/auth/logout`,
                method: 'POST',
                // headers: { Authorization: `Bearer ${token}` },
            }),
            invalidatesTags: ['user'],
        }),

        //запрос для проверки валидный ли токен храниться в памяти для последующих запросов на бэкенд
        //отправляет только токен возвращает имя пользователя и эмеил
        isActivToken: builder.query({
            query: () => ({
                url: `/auth/current`,
                method: 'GET',
                // headers: { Authorization: `Bearer ${token}` },
            }),
            providesTags: ['user'],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useIsActivTokenQuery, useRegistrationUserMutation, useLoginUserMutation, useUnLoginUserMutation } =
    authApi;
