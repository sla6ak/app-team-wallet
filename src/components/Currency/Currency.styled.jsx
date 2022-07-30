import styled from '@emotion/styled';
import CurrencyBg from '../../images/currency-bg.png';

export const Container = styled.div`
    height: 174px;
    width: 280px;
    border-radius: 30px;
    background-color: #6E78E8;
    color: #FFFFFF;
`;

export const Header = styled.ul`
    display: flex;
    align-items: center;
    padding: 12px;
    justify-content: space-between;
    list-style: none;

    font-family: 'Circe';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
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
`;

export const ListCurrency = styled.ul`
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li:not(:last-child) {
        padding-bottom: 12px;
    }
`;