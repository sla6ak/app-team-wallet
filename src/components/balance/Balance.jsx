import React from 'react';
import { useAllTransactionsQuery } from 'redux/transactionAPI';
import { BalanceBlock, BalanceTitle, BalanceValue } from './Balance.styled';

const Balance = () => {
    const { data: allTransactions } = useAllTransactionsQuery();
    let lastTransaction;
    if (allTransactions) {
        lastTransaction = allTransactions.transactions.slice(-1);
    }

    return (
        <BalanceBlock>
            <BalanceTitle>Your balance</BalanceTitle>
            {lastTransaction && <BalanceValue>&#8372; {lastTransaction[0].balanceAfterTransaction}</BalanceValue>}
        </BalanceBlock>
    );
};

export default Balance;
