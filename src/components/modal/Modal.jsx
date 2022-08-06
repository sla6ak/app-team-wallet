import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Overlay,
    ModalWindow,
    ModalCloseBtn
} from './Modal.styled';

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
        <Overlay onClick={mouseDownClouse}>
            <ModalWindow>
                <ModalCloseBtn onClick={onModalClose}>
                    <CloseIcon />
                </ModalCloseBtn>
                {children}
            </ModalWindow>
        </Overlay>,
        document.querySelector('#modal')
    );
};

export default Modal;