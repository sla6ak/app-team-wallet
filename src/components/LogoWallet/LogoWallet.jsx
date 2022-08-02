import React from 'react';
import { Title, TitleConteiner } from './LogoWallet.styled';
import spr from '../../images/sprite.svg';

const LogoWallet = () => {
    return (
        <TitleConteiner>
            <svg className="icon-wallet" style={{ zIndex: 0 }}>
                <use href={spr + '#wallet'}></use>
            </svg>
            <Title>Wallet</Title>
        </TitleConteiner>
    );
};

export default LogoWallet;
