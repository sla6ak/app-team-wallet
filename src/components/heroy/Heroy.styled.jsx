import styled from '@emotion/styled';

export const HeroyConteiner = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    margin-top: 60px;
    align-items: center;
    @media (min-width: 1280px) {
        margin-bottom: 0px;
        margin-top: 0px;
        flex-direction: column;
        background-color: #e5e5e5;
        margin-right: 50px;
        min-height: 100vh;
        justify-content: center;
    }
`;
export const HeroyBackground = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: 1280px) {
        background-color: #e5e5e5;
        width: 50%;
        justify-content: end;
        align-items: center;
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
