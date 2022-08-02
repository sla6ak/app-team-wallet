import styled from '@emotion/styled';
import { Button } from '@mui/material';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

export const ModalWindow = styled.div`
    border: dashed 1px red;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    @media (min-width: 768px) {
        position: relative;
        width: 540px;
        height: 508px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        border-radius: 20px;
        padding: 40px 73px;
    }
`;

export const ModalTitle = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 30px;
        line-height: 45px;
    }
`;

export const ModalCloseBtn = styled.div`
    @media (min-width: 768px) {
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
    }
`;

export const ButtonWrapper = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    /* margin-left: auto;
    margin-right: auto; */
`;

export const ButtonAdd = styled(Button)`
    border-radius: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    background-color: #24cca7;
    :hover {
        background-color: #1cad8e;
    }
`;

export const ButtonCancel = styled(Button)`
    border-radius: 20px;
    font-weight: 400;
    width: 100%;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    color: #4a56e2;
    border-color: #4a56e2;
`;
