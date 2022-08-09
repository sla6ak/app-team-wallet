import { useEffect } from 'react';
import Media from 'react-media';
import { Container } from '../../components/container/Container';
import BackgroundMainPage from '../../components/backgroundMainPage/BackgroundMainPage';
import Navigation from 'components/navigation/Navigation';
import Currency from '../../components/currency/Currency';
import {
    TopInfoWrap,
    NavBalanceWrap,
    MainWrap,
    BorderLine,
} from './DashboardPage.styled';

import AppBar from '../../components/appBar/AppBar';
import Balance from '../../components/balance/Balance';
import { Outlet, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
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
                            <Media query="(min-width: 768px)" render={() => <Balance />} />
                        </NavBalanceWrap>
                        <Media query="(min-width: 768px)" render={() => <Currency />} />
                    </TopInfoWrap>
                    <Media query="(min-width: 1280px)" render={() => <BorderLine></BorderLine>} />
                    <Outlet />
                </MainWrap>
            </Container>
        </BackgroundMainPage>
    );
};

export default DashboardPage;
