import styled from '@emotion/styled';

export const ShowPasswordBtnStyles = {
    color: '#E0E0E0',
};

export const RegisterModalForma = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 25;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;

    background-color: ${({ theme }) => theme.colors.white};

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
