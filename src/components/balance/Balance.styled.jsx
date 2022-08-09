import styled from '@emotion/styled';

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
        min-width: 393px;
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