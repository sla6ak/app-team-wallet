import styled from '@emotion/styled';

export const RegisterModalForma = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 25;
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
        height: 616px;
        border-radius: 20px;
    }
    
    @media (min-width: 1280px) {
        margin-left: 107px;
    }
`;

export const ShowPasswordBtnStyles = {
    color: '#E0E0E0',
};
