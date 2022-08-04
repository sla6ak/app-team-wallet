import styled from '@emotion/styled';

export const BackgroundBox = styled.div`
    background-color: #e7eaf2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
        flex-direction: row;
        align-items: center;
    }
`;
