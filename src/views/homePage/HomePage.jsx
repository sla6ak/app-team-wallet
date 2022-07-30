import React, { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ModalTransactions from '../../components/modalTransactions/ModalTransactions';
import { OpenModalBtn } from './HomePage.styled';
import spr from '../../images/sprite.svg';
const HomePage = () => {
    const [modal, setModal] = useState(null);
    const onModalClose = () => {
        setModal(null);
    };
    console.log(modal);
    return (
        <div>
            {/* <h1>Home page</h1> */}
            <AppBar />
            {modal && <ModalTransactions onModalClose={onModalClose} />}
            <OpenModalBtn onClick={() => setModal(true)}>
                <svg>
                    <use href={spr + '#plus-btn'}></use>
                </svg>
            </OpenModalBtn>
        </div>
    );
};

export default HomePage;
