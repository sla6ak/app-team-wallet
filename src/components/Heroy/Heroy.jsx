import React from 'react';
import spr from '../../images/sprite.svg';
import { HeroyConteiner, HeroyBackground, HeroyTitle } from './Heroy.styled';

const Heroy = ({ page }) => {
    return (
        <HeroyBackground>
            <HeroyConteiner>
                {page === 'login' ? (
                    <svg className="icon-greetting">
                        <use href={spr + '#header-login'}></use>
                    </svg>
                ) : (
                    <svg className="icon-greetting">
                        <use href={spr + '#header-register'}></use>
                    </svg>
                )}
                <HeroyTitle>Finanse App</HeroyTitle>
            </HeroyConteiner>
        </HeroyBackground>
    );
};

export default Heroy;
