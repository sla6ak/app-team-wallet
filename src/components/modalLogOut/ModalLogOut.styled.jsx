import styled from '@emotion/styled';

export const LogOutContainer = styled.div`
    min-width: 320px;
    padding: 20px;

    @media (min-width: 768px) {
        width: 410px;
    }
`;

export const ModalTitle = styled.h3`
    text-align: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.8;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 2.25;
    }
`;

export const TitleAccent = styled.p`
    font-weight: 700;
    font-size: 26px;
    line-height: 1.38;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;

export const Button = styled.div`
    width: 150px;
`;