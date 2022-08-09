import styled from '@emotion/styled';

export const ModalForma = styled.div`
    position: absolute;
    z-index: 25;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (min-width: 768px) {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        border-radius: 20px;
        padding: 40px;
        width: 533px;
        height: 468px;
    }

    @media (min-width: 1280px) {
        margin-left: 107px;
    }
`;

export const FormaCastom = styled.form`
    max-width: 280px;
    margin-top: 20px;

    @media (min-width: 768px) {
        width: 410px;
    }
`;

export const ErrorLabel = styled.div`
    color: ${({ theme }) => theme.colors.error};
    font-size: 14px;
    margin-left: 10px;
`;


export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-top: 40px;
    width: 100%;
`;

export const ShowPasswordBtnStyles = {
    color: '#E0E0E0',
};

export const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 42px;

    @media (min-width: 768px) {
        width: 300px;
    }
`;