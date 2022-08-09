import styled from '@emotion/styled';

export const ShowPasswordBtnStyles = {
    color: '#E0E0E0',
};

export const ModalForma = styled.div`
    position: absolute;
    z-index: 25;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (min-width: 768px) {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        padding: 40px;
        width: 533px;
        height: 468px;
    }

    @media (min-width: 1280px) {
        margin-left: 107px;
    }
`;

export const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
    margin-top: 42px;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 60px;
    width: 100%;
`;

export const FormaCastom = styled.form`
    max-width: 410px;
    width: 100%;
    margin-top: 30px;

    @media (min-width: 768px) {
        width: 410px;
    }
`;

export const ErrorLabel = styled.div`
    color: ${({ theme }) => theme.colors.error};

    font-size: 14px;
    margin-left: 10px;
`;
