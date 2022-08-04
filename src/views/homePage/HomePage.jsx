import React from 'react';
import Media from 'react-media';
import BackgroundMainPage from '../../components/backgroundMainPage/BackgroundMainPage';
import {
    HomeIcn,
    TimelineIcn,
    DollarIcn,
    Link,
    LinkActive,
    BtnList,
    BalanceBlock,
    HomePageWrap,
    BalanceTitle,
    BalanceValue,
    AddIcn,
    PlusBtn,
    LinkText,
    LinkTextActive,
    NavLinkWrap,
    TopInfoWrap,
    NavBalanceWrap,
    MainWrap,
    BorderLine,
} from './HomePage.styled';
import TableMobile from '../../components/table/TableMobile';
import TableLarge from '../../components/table/TableLarge';
import AppBar from '../../components/appBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import Statistics from 'components/statistics/Statistics';

const HomePage = () => {
    const activeBtn = isActive => {
        if (isActive) return LinkActive;
    };
    const activeBtnText = isActive => {
        if (isActive) return LinkTextActive;
    };
    return (
        <BackgroundMainPage>
            <HomePageWrap>
                <AppBar />
                <MainWrap>
                    <TopInfoWrap>
                        <NavBalanceWrap>
                            <BtnList>
                                <NavLinkWrap>
                                    <Link to="/" style={({ isActive }) => activeBtn(isActive)}>
                                        <HomeIcn />
                                    </Link>
                                    <Media
                                        query="(min-width: 768px)"
                                        render={() => (
                                            <LinkText to="/" style={({ isActive }) => activeBtnText(isActive)}>
                                                Home
                                            </LinkText>
                                        )}
                                    />
                                </NavLinkWrap>
                                <NavLinkWrap>
                                    <Link to="/statistic" style={({ isActive }) => activeBtn(isActive)}>
                                        <TimelineIcn />
                                    </Link>
                                    <Media
                                        query="(min-width: 768px)"
                                        render={() => (
                                            <LinkText to="/statistic" style={({ isActive }) => activeBtnText(isActive)}>
                                                Statistics
                                            </LinkText>
                                        )}
                                    />
                                </NavLinkWrap>
                                <Media
                                    query="(max-width: 767px)"
                                    render={() => (
                                        <li>
                                            <Link to="/currency" style={({ isActive }) => activeBtn(isActive)}>
                                                <DollarIcn />
                                            </Link>
                                        </li>
                                    )}
                                />
                            </BtnList>
                            <Routes>
                                <Route
                                    path="/statistic"
                                    element={
                                        <PrivateRoute>
                                            <Statistics />
                                        </PrivateRoute>
                                    }
                                />
                            </Routes>
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
                    <Media query="(min-width: 1279px)" render={() => <BorderLine></BorderLine>} />
                    <Media query="(max-width: 767px)" render={() => <TableMobile />} />
                    <Media query="(min-width: 768px)" render={() => <TableLarge />} />
                </MainWrap>
                <PlusBtn>
                    <AddIcn />
                </PlusBtn>
            </HomePageWrap>
        </BackgroundMainPage>
    );
};

export default HomePage;
