import React from 'react';
import { BackgroundBox } from './BacgroundGreeting.styled';
import Heroy from 'components/Heroy/Heroy';
import spr from '../../images/sprite.svg';
import { BlurFone } from 'components/BlurFone/BlurFone.styled';

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
