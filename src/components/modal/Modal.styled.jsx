import styled from '@emotion/styled';

// import { Button } from '@mui/material';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

export const ModalWindow = styled.div`
    position: relative;
    /* width: 100vw;
    height: 100vh; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    @media (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: dashed 1px red;
        /* width: 540px;
        height: 508px; */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        border-radius: 20px;
        padding: 40px 73px;
    }
`;

export const ModalCloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const ModalBack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
`;
