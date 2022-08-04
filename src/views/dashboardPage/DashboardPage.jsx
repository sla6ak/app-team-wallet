import { useEffect, useState } from 'react';
import Media from 'react-media';
import { Container } from '../../components/container/Container';
import BackgroundMainPage from '../../components/backgroundMainPage/BackgroundMainPage';
import Navigation from 'components/navigation/Navigation';
import Currency from '../../components/currency/Currency';
import ModalTransactions from 'components/modalTransactions/ModalTransactions';
import Modal from 'components/modal/Modal';
import {
    BalanceBlock,
    BalanceTitle,
    BalanceValue,
    AddIcn,
    PlusBtn,
    TopInfoWrap,
    NavBalanceWrap,
    MainWrap,
    BorderLine,
} from './DashboardPage.styled';

import AppBar from '../../components/appBar/AppBar';
import { Outlet, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BackgroundMainPage>
            <AppBar />
            <Container>
                <MainWrap>
                    <TopInfoWrap>
                        <NavBalanceWrap>
                            <Navigation />
                            <BalanceBlock>
                                <BalanceTitle>Your balance</BalanceTitle>
                                <BalanceValue>&#8372; 24 000</BalanceValue>
                            </BalanceBlock>
                        </NavBalanceWrap>
                        <Media query="(min-width: 768px)" render={() => <Currency />} />
                    </TopInfoWrap>
                    <Media query="(min-width: 1280px)" render={() => <BorderLine></BorderLine>} />
                    <Outlet />
                </MainWrap>
                <PlusBtn
                    onClick={() => {
                        setModal(true);
                    }}
                >
                    <AddIcn />
                </PlusBtn>
                {modal ? (
                    <Modal
                        onModalClose={() => {
                            setModal(false);
                        }}
                    >
                        <ModalTransactions
                            onModalClose={() => {
                                setModal(false);
                            }}
                        />
                    </Modal>
                ) : null}
            </Container>
        </BackgroundMainPage>
    );
};

export default DashboardPage;
