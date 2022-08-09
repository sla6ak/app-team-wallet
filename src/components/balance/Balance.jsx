import React from 'react';
import { useAllTransactionsQuery } from 'redux/transactionAPI';
import { BalanceBlock, BalanceTitle, BalanceValue } from './Balance.styled';

const Balance = () => {
    const { data: allTransactions } = useAllTransactionsQuery();
    let lastTransaction = null;
    if (allTransactions) {
        lastTransaction = allTransactions.currentBalance;
    }

    return (
        <BalanceBlock>
            <BalanceTitle>Your balance</BalanceTitle>
            {lastTransaction && (
                <BalanceValue>
                    &#8372;
                    {lastTransaction}
                </BalanceValue>
            )}
        </BalanceBlock>
    );
};

export default Balance;
