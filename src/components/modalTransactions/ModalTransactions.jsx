import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClouse }) => {
    const mouseDownClouse = e => {
        if (e.target === e.currentTarget) {
            onModalClouse();
        }
    };
    useEffect(() => {
        const keyDownClouse = e => {
            if (e.code === 'Escape') {
                onModalClouse();
            }
        };

        window.addEventListener('keydown', keyDownClouse);
        return () => {
            window.removeEventListener('keydown', keyDownClouse);
        };
    }, [onModalClouse]);

    return createPortal(
        <div>
            grey fon
            <div onClick={mouseDownClouse}>
                <button onClick={onModalClouse}>X</button>modal
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default ModalTransactions;
