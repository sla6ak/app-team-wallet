import styled from '@emotion/styled';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;

    font-weight: 700;
    font-family: 'Poppins';
    font-size: 24px;
    line-height: 1.46;

    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 30px;
        line-height: 1.5;
    }
`;