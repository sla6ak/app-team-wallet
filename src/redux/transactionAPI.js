import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
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
