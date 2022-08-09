import React from 'react';
import Heroy from 'components/heroy/Heroy';
import spr from '../../images/sprite.svg';
import { BackgroundBox } from './BacgroundGreeting.styled';
import { BlurFone } from 'components/blurFone/BlurFone.styled';

const BacgroundGreeting = ({ page, children }) => {
    return (
        <BackgroundBox>
            <svg className="icon-ellipse-blue">
                <use href={spr + '#ellipse-1'}></use>
            </svg>
            <svg className="icon-ellipse-purp">
                <use href={spr + '#ellipse-2'}></use>
            </svg>
            <Heroy page={page} />
            {children}
            <BlurFone />
        </BackgroundBox>
    );
};

export default BacgroundGreeting;
