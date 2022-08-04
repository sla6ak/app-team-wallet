import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';

export const AddIcn = styled(Add)({
    fontSize: 'xx-large',
    color: 'white',
});

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
    font-weight: 700;
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
    cursor: pointer;

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
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MainWrap = styled.div`
    @media (min-width: 1279px) {
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
    }
`;

export const BorderLine = styled.span`
    margin-left: 69px;
    margin-right: 69px;
    width: 1px;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    display: block;
    height: 100vh;
`;
