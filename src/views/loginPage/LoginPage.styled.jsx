import styled from '@emotion/styled';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

export const ModalForma = styled.div`
    border-radius: 20px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    position: absolute;
    z-index: 25;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
        position: relative;
        padding: 40px;
        width: 533px;
        height: 468px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
    }
    @media (min-width: 1280px) {
        margin-left: 107px;
    }
`;

export const BoxButton = styled.div`
    max-width: 300px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;

export const InputBox = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
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
