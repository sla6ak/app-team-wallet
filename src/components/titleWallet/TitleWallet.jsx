import React from 'react';
import {
    Title,
    TitleContainer,
    Svg,
} from './TitleWallet.styled';
import spr from '../../images/sprite.svg';

const TitleWallet = () => {
    return (
        <TitleContainer>
            <Svg className="icon-wallet" style={{ zIndex: 0 }}>
                <use href={spr + '#wallet'}></use>
            </Svg>
            <Title>Wallet</Title>
        </TitleContainer>
    );
};

export default TitleWallet;
