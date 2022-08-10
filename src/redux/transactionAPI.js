import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
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

    tagTypes: ['transaction'],
    endpoints: builder => ({
        addNewTransaction: builder.mutation({
            query: newTransaction => ({
                url: '/transaction/add',
                method: 'POST',
                body: newTransaction,
            }),
            invalidatesTags: ['transaction'],
        }),

        statistica: builder.query({
            query: param => ({
                url: `/transaction/statistic/${param}`,
                method: 'GET',
            }),
            providesTags: ['transaction'],
        }),

        allTransactions: builder.query({
            query: () => ({
                url: `/transaction/all`,
                method: 'GET',
            }),
            providesTags: ['transaction'],
        }),
    }),
});

export const { useAllTransactionsQuery, useStatisticaQuery, useAddNewTransactionMutation } = transactionApi;
