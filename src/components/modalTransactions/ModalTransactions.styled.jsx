import styled from '@emotion/styled';

export const WrapperTransaction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;

    @media (min-width: 768px) {
        width: 540px;
        height: 508px;
        padding: 40px;
    }
`;

export const ModalTitle = styled.h3`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 30px;
        line-height: 1.5;
    }
`;

export const FormaCastom = styled.form`
    min-width: 300px;
    margin-top: 30px;

    @media (min-width: 768px) {
        width: 394px;
    }
`;

export const InlineWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
    }
`;

export const CountContainer = styled.div`
    width: 50 px;
    @media (min-width: 768px) {
        margin-right: 5px;
    }
`;

export const DateContainer = styled.div`
    width: 50 px;
    @media (min-width: 768px) {
        margin-left: 5px;
    }
`;

export const Inputs = styled.div`
    margin-top: 20px;
    padding: 20px;
    height: 250px;
    width: 300px;

    @media (min-width: 768px) {
        margin-left: 58px;
        margin-top: 0;
        padding: 0;
        height: 150px;
        width: 280px;
    }
`;

export const ActivePlus = styled.span`
    position: relative;
    font-family: 'Circe';
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: #24CCA7;
    margin-right: 60px;
`;

export const NoActivePlus = styled.span`
    font-family: 'Circe';
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: #e0e0e0;
    margin-right: 60px;
`;

export const ActiveMinus = styled.span`
    position: relative;
    font-family: 'Circe', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #ff6596;
    margin-left: 60px;
`;

export const NoActiveMinus = styled.span`
    font-family: 'Circe', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #e0e0e0;
    margin-left: 60px;
`;

export const Checkbox = styled.span`
    display: flex;
    align-items: centre;
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    max-width: 300px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        margin-top: 30px;
        padding-top: 0;
    }
`;