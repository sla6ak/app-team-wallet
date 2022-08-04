import { useEffect } from 'react';
import Media from 'react-media';
import { Container } from '../../components/container/Container';
import BackgroundMainPage from '../../components/backgroundMainPage/BackgroundMainPage';
import Navigation from 'components/navigation/Navigation';
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
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BackgroundMainPage>
            <Container>
                <AppBar />
                <MainWrap>
                    <TopInfoWrap>
                        <NavBalanceWrap>
                            <Navigation />
                            <BalanceBlock>
                                <BalanceTitle>Your balance</BalanceTitle>
                                <BalanceValue>&#8372; 24 000</BalanceValue>
                            </BalanceBlock>
                        </NavBalanceWrap>
                        <Media
                            query="(min-width: 768px)"
                            render={() => (
                                <div style={{ width: '336px', height: '182px', background: '#4A56E2' }}>Currency</div>
                            )}
                        />
                    </TopInfoWrap>
                    <Media query="(min-width: 1280px)" render={() => <BorderLine></BorderLine>} />
                    <Outlet />
                </MainWrap>
                <PlusBtn>
                    <AddIcn />
                </PlusBtn>
            </Container>
        </BackgroundMainPage>
    );
};

export default DashboardPage;
