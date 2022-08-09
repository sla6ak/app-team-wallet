import React from 'react';
import { BalanceBlock,
    BalanceTitle,
    BalanceValue,
} from './Balance.styled';

const Balance = () => {
    return (
        <BalanceBlock>
            <BalanceTitle>Your balance</BalanceTitle>
            <BalanceValue>&#8372; 24 000</BalanceValue>
        </BalanceBlock>
    );
};

export default Balance;