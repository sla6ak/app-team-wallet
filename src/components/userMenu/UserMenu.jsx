import { useState } from 'react';
import { Greeeting, LogOutBtn, Wrapper, TextBtn } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import ModalLogOut from 'components/modalLogOut/modalLogOut';

const UserMenu = () => {
    const [modal, setModal] = useState(false);

    const userName = useSelector(state => state.userName);

    return (
        <Wrapper>
            <Greeeting>{userName}</Greeeting>
            <LogOutBtn
                onClick={() => {
                    setModal(true);
                }}
            >
                <LogoutIcon />
                <TextBtn> Exit </TextBtn>
            </LogOutBtn>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalLogOut
                        onModalClose={() => {
                            setModal(false);
                        }}
                    />
                </Modal>
            ) : null}
        </Wrapper>
    );
};

export default UserMenu;
