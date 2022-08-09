import styled from '@emotion/styled';

export const HeroyConteiner = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 60px;
    }

    @media (min-width: 1280px) {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0px;
        margin-top: 0px;
        margin-right: 50px;
        min-height: 100vh;
        background-color: #e5e5e5;
    }
`;
export const HeroyBackground = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 1280px) {
        justify-content: end;
        align-items: center;
        width: 43%;
        background-color: #e5e5e5;
    }
`;
export const HeroyTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin-left: 20px;
    z-index: 3;
    
    @media (min-width: 1280px) {
        margin-left: 0px;
    }
`;

export const Svg = styled.svg`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin-left: 20px;
    z-index: 3;
    @media (min-width: 1280px) {
        margin-left: 0px;
    }
`;