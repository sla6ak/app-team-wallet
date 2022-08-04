import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Home, Timeline, AttachMoney } from '@mui/icons-material';

export const HomeIcn = styled(Home)`
    font-size: xx-large;
    color: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
        font-size: small;
    } ;
`;

export const TimelineIcn = styled(Timeline)`
    font-size: xx-large;
    color: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
        font-size: small;
    } ;
`;

export const DollarIcn = styled(AttachMoney)({
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
