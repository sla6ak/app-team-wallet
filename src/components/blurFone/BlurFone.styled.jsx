import styled from '@emotion/styled';

export const BlurFone = styled.div`
    @media (min-width: 1280px) {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(50px);
        z-index: 3;
        position: absolute;
        top: 0;
        right: 0;
        width: 57vw;
        height: 100vh;
    }
`;
