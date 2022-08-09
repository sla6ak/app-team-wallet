import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99;
`;

export const LogOutContainer = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;

    @media (min-width: 768px) {
        top: 50%;
        transform: translate(-50%, -50%);
        width: 540px;
        height: 308px;
        padding: 40px;
        box-shadow: none;
    }
`;

export const ModalTitle = styled.h3`
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.8;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 2.25;
    }
`;

export const TitleAccent = styled.p`
    margin-top: 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.38;

    @media (min-width: 768px) {
        font-size: 26px;
        line-height: 1.38;
    }
`;

export const ButtonWrapper = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
`;

export const Button = styled.div`
    width: 250px;

    @media (min-width: 768px) {
        width: 200px;
    }
`;

export const ModalCloseBtn = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`;