import styled from '@emotion/styled';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

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

export const ButtonWrapper = styled.div`
    max-width: 300px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;
export const FormaCastom = styled.form`
    max-width: 410px;
    width: 100%;

    margin-top: 30px;

    @media (min-width: 768px) {
        width: 410px;
    }
`;
