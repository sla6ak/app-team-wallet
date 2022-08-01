import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Home, Timeline, AttachMoney, Add } from '@mui/icons-material';

export const HomePageWrap = styled.div`
    z-index: 100;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 1279px) {
        padding-top: 45px;
    }
`;

export const HomeIcn = styled(Home)`
    font-size: xx-large;
    color: white;
    @media (min-width: 768px) {
        font-size: small;
    } ;
`;

export const TimelineIcn = styled(Timeline)`
    font-size: xx-large;
    color: white;
    @media (min-width: 768px) {
        font-size: small;
    } ;
`;

export const DollarIcn = styled(AttachMoney)({
    fontSize: 'xx-large',
    color: 'white',
});

export const AddIcn = styled(Add)({
    fontSize: 'xx-large',
    color: 'white',
});

export const Link = styled(NavLink)`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 38px;
    height: 38px;
    background-color: #6e78e8;
    border-radius: 6px;
    &:hover {
        box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
        background-color: #4a56e2;
    }
    @media (min-width: 768px) {
        margin-bottom: 21px;
        width: 18px;
        height: 18px;
        border-radius: 2px;
    }
`;

export const LinkText = styled(NavLink)`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-decoration: none;
    color: #000000;

    margin-left: 23px;
`;

export const LinkActive = {
    backgroundColor: '#4A56E2',
    boxShadow: '0px 3px 10px rgba(74, 86, 226, 0.5)',
};

export const LinkTextActive = {
    fontWeight: '700',
};

export const NavLinkWrap = styled.li`
    display: flex;
    align-items: baseline;
`;

export const BtnList = styled.ul`
    display: flex;
    list-style: none;
    margin: 15px 45px 32px 45px;
    justify-content: space-between;
    @media (min-width: 768px) {
        flex-direction: column;
        margin: 45px 0 32px 0;
    }
    @media (min-width: 1279px) {
        margin-top: 0px;
    }
`;

export const BalanceBlock = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 8px 32px;
    margin-bottom: 32px;
    background-color: #ffffff;
    min-width: 280px;
    min-height: 80px;
    border-radius: 30px;
    @media (min-width: 768px) {
        min-width: 336px;
        margin-bottom: 0px;
    }
    @media (min-width: 1279px) {
        margin-bottom: 32px;
    }
`;

export const BalanceTitle = styled.p`
    font-family: 'Circe';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 12px;

    color: #a6a6a6;
`;

export const BalanceValue = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
`;

export const PlusBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background: #24cca7;
    border-radius: 50%;
    border: none;

    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    @media (min-width: 768px) {
        bottom: 40px;
        right: 40px;
    }
`;

export const TopInfoWrap = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding-left: 32px;
        padding-right: 32px;
        margin-bottom: 20px;
        align-items: flex-end;
    }
    @media (min-width: 1279px) {
        display: block;
        padding-left: 16px;
        padding-right: 0px;
    }
`;

export const NavBalanceWrap = styled.div`
    @media (max-width: 767px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MainWrap = styled.div`
    @media (min-width: 1279px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const BorderLine = styled.span`
    width: 1px;
    margin-left: 69px;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    display: block;
    height: 100vh;
`;
