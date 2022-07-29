import styled from '@emotion/styled';

export const Title = styled.h1`
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 30px;
        line-height: 45px;
        display: flex;
        align-items: center;
    }
`;

export const TitleConteiner = styled.div`
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    @media (min-width: 768px) {
    }
`;
