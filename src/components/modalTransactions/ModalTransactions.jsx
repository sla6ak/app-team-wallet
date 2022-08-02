import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, Modal, ModalTitle, ModalCloseBtn } from './ModalTransactions.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonAdd, ButtonCancel, ButtonWrapper } from './ModalTransactions.styled';
import { useFormik } from 'formik';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClose }) => {
    const [disabled, setDisabled] = useState(false);

    const mouseDownClose = e => {
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

    const formik = useFormik({
        initialValues: {
            operation: '',
            tags: '',
            sum: '',
            date: new Date(),
            comment: '',
        },
        onSubmit: async data => {
            setDisabled(true);
            try {
                await console.log('transaction data log:', data);
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });

    return createPortal(
        <ModalWrapper>
            <Modal>
                <div onClick={mouseDownClose}>
                    <ModalCloseBtn onClick={onModalClose}>
                        <CloseIcon />
                    </ModalCloseBtn>
                </div>
                <ModalTitle>Add transaction</ModalTitle>

                <ButtonWrapper>
                    <ButtonAdd fullWidth variant={'contained'} disabled={disabled} onClick={formik.handleSubmit}>
                        ADD
                    </ButtonAdd>
                    <ButtonCancel fullWidth variant={'outlined'} onClick={onModalClose}>
                        CANCEL
                    </ButtonCancel>
                </ButtonWrapper>
            </Modal>
        </ModalWrapper>,

        document.querySelector('#modal')
    );
};

export default ModalTransactions;
