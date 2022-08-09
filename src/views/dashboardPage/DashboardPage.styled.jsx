import styled from '@emotion/styled';

export const TopInfoWrap = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        align-items: flex-end;
    }
    @media (min-width: 1279px) {
        display: block;
        padding-left: 16px;
        padding-right: 0px;
    }
`;

export const NavBalanceWrap = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MainWrap = styled.div`
    @media (min-width: 1279px) {
        min-height: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 45px;
    }
`;

export const BorderLine = styled.span`
    position: absolute;
    top: 0;
    left: 480px;
    margin-right: 69px;
    width: 1px;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    display: block;
    height: 100%;
`;
