import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ModalBack, ModalWindow, ModalCloseBtn } from './Modal.styled';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const Modal = ({ onModalClose, children }) => {
    const mouseDownClouse = e => {
        if (e.target === e.currentTarget) {
            onModalClose();
        }
    };
    useEffect(() => {
        const keyDownClose = e => {
            if (e.code === 'Escape') {
                onModalClose();
            }
        };

        window.addEventListener('keydown', keyDownClose);
        return () => {
            window.removeEventListener('keydown', keyDownClose);
        };
    }, [onModalClose]);

    return createPortal(
        <ModalBack onClick={mouseDownClouse}>
            <ModalWindow>
                <ModalCloseBtn onClick={onModalClose}>
                    <CloseIcon />
                </ModalCloseBtn>
                {children}
            </ModalWindow>
        </ModalBack>,
        document.querySelector('#modal')
    );
};

export default Modal;
