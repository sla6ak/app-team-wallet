import styled from '@emotion/styled';

export const BackgroundBox = styled.div`
    background-color: #e7eaf2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const BlurMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
`;
