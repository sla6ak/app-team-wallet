import styled from '@emotion/styled';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    @media (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: 1279px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;
