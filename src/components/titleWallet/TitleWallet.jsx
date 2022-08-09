import React from 'react';
import {
    Title,
    TitleContainer,
} from './TitleWallet.styled';
import spr from '../../images/sprite.svg';

const TitleWallet = () => {
    return (
        <TitleContainer>
            <svg className="icon-wallet" style={{ zIndex: 0 }}>
                <use href={spr + '#wallet'}></use>
            </svg>
            <Title>Wallet</Title>
        </TitleContainer>
    );
};

export default TitleWallet;
