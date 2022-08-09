import styled from '@emotion/styled';

export const Header = styled.header`
    background-color: white;
    width: 100%;
    z-index: 2;
`;

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;

    @media (min-width: 768px) {
        height: 80px;
    }
`;
