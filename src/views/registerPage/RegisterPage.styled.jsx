import styled from '@emotion/styled';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

export const RegisterModalForma = styled.div`
    border-radius: 20px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.white};

    position: absolute;
    z-index: 25;
    top: 0;
    left: 0;
    @media (min-width: 768px) {
        position: relative;
        padding: 40px;
        width: 533px;
        height: 616px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
    }
    @media (min-width: 1280px) {
        margin-left: 107px;
    }
`;
