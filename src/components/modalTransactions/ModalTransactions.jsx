import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, ModalTitle, ModalCloseBtn } from './ModalTransactions.styled';
import CloseIcon from '@mui/icons-material/Close';
// import { useFormik } from 'formik';
import { ButtonAdd, ButtonCancel, ButtonWrapper } from './ModalTransactions.styled';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClose }) => {
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
        <ModalWindow>
            <div onClick={mouseDownClouse}>
                <ModalCloseBtn onClick={onModalClose}>
                    <CloseIcon />
                </ModalCloseBtn>
            </div>
            <ModalTitle>Add transaction</ModalTitle>
            <ButtonWrapper>
                <ButtonAdd fullWidth variant={'contained'} type="submit">
                    ADD
                </ButtonAdd>
                <ButtonCancel fullWidth variant={'outlined'} onClick={onModalClose}>
                    CANCEL
                </ButtonCancel>
            </ButtonWrapper>
        </ModalWindow>,
        document.querySelector('#modal')
    );
};

export default ModalTransactions;
