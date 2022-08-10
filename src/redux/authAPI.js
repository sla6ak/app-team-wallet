import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['user'],
    endpoints: builder => ({
        registrationUser: builder.mutation({
            query: newUser => ({
                url: '/auth/signup',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['user'],
        }),
        loginUser: builder.mutation({
            query: userData => ({
                url: `/auth/login`,
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['user'],
        }),
        emailVerify: builder.mutation({
            query: verificationToken => ({
                url: `/auth/login/${verificationToken}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['user'],
        }),
        unLoginUser: builder.mutation({
            query: () => ({
                url: `/auth/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['user'],
        }),
        isActivToken: builder.query({
            query: () => ({
                url: `/auth/current`,
                method: 'GET',
            }),
            providesTags: ['user'],
        }),
    }),
});

export const {
    useIsActivTokenQuery,
    useEmailVerifyMutation,
    useRegistrationUserMutation,
    useLoginUserMutation,
    useUnLoginUserMutation,
} = authApi;
