import styled from '@emotion/styled';
import CurrencyBg from 'images/currency-bg.png';

export const Container = styled.div`
    height: 174px;
    min-width: 280px;
    border-radius: 30px;
    background-color: #6e78e8;
    color: #ffffff;
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
        padding: 17px 49px 16px 42px;
    }
`;

export const Table = styled.div`
    height: 124px;

    border-radius: 0 0 30px 30px;
    background-color: #4a56e2;
    min-height: 93px;
    background-image: url(${CurrencyBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;

    font-family: 'Circe';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    @media (min-width: 768px) {
        min-height: 132px;
    }

    @media (min-width: 1279px) {
        min-height: 287px;
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
        padding: 20px 50px 0px 38px;
    }
`;

export const ItemCurrency = styled.li`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.li`
    width: 60px;
    text-align: center;

    @media (min-width: 1279px) {
        width: 70px;
    }
`;

export const Span = styled.span`
    width: 60px;
    text-align: center;

    @media (min-width: 1279px) {
        width: 70px;
    }
`;