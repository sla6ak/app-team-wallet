import styled from '@emotion/styled';
import CurrencyBg from 'images/currency-bg.png';

export const Container = styled.div`
    height: 174px;
    width: 280px;
    border-radius: 30px;
    background-color: #6E78E8;
    color: #FFFFFF;
    @media (min-width: 768px) {
        height: 182px;
        min-width: 336px;
    }
    @media (min-width: 1279px) {
        height: 347px;
        width: 393px;
    }
`;

export const Header = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 11px 17px 12px 20px;
    justify-content: space-between;
    list-style: none;

    font-family: 'Circe';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 768px) {
        padding: 11px 25px 12px 20px;
    }
    @media (min-width: 1279px) {
        padding: 17px 64px 16px 44px;
    }
`;

export const Table = styled.div`
    height: 124px;

    border-radius: 0 0 30px 30px;
    background-color: #4A56E2;
    height-height: 93px;
    background-image: url(${CurrencyBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;

    font-family: 'Circe';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    @media (min-width: 768px) {
        height: 132px;
    }

    @media (min-width: 1279px) {
        height: 287px;
    }
`;

export const ListCurrency = styled.ul`
    margin: 0;
    padding: 12px 20px 16px 20px;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li:not(:last-child) {
        padding-bottom: 12px;
    }

    @media (min-width: 768px) {
        padding: 16px 20px 20px 20px;
    }

    @media (min-width: 1279px) {
        padding: 20px 61px 0px 58px;
    }
`;

export const ItemCurrency = styled.li`
    display: flex;
    justify-content: space-between;
`;