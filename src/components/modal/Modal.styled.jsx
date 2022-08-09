import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    z-index: 99;

    @media (min-width: 768px) {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export const ModalWindow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 320px;
    background-color: #fff;

    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 540 px;
        border-radius: 20px;
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