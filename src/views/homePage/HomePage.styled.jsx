import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Home, Timeline, AttachMoney, Add } from '@mui/icons-material';

export const HomePageWrap = styled.div`
    background-color: #e7eaf2;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HomeIcn = styled(Home)({
    width: '25px',
    fontSize: 'xx-large',
    color: 'white',
});

export const TimelineIcn = styled(Timeline)({
    fontSize: 'xx-large',
    color: 'white',
});

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
`;

export const LinkActive = {
    backgroundColor: '#4A56E2',
    boxShadow: '0px 3px 10px rgba(74, 86, 226, 0.5)',
};

export const BtnList = styled.ul`
    display: flex;
    list-style: none;
    margin: 15px 65px 32px 65px;
    justify-content: space-between;
`;

export const SumBlock = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 8px 32px;
    margin-bottom: 32px;
    background-color: #ffffff;
    min-width: 280px;
    min-height: 80px;
    border-radius: 30px;
`;

export const SumTitle = styled.p`
    font-family: 'Circe';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 12px;

    color: #a6a6a6;
`;

export const SumValue = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
`;

export const PlusBtn = styled.button`
    width: 44px;
    height: 44px;
    background: #24cca7;
    border-radius: 50%;
    border: none;

    position: absolute;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`;
