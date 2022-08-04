import styled from '@emotion/styled';

export const Greeeting = styled.span`
    display: block;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
    margin-right: 12px;

    @media (min-width: 768px) {
        &:after {
            content: '|';
            width: 1px;
            height: 30px;
            margin-left: 12px;
        }
    }
`;

export const LogOutBtn = styled.div`
    color: #bdbdbd;
    min-width: 0px;
    padding: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
    display: flex;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s linear;
    @media (min-width: 768px) {
        padding-top: 28px;
        padding-bottom: 28px;

        &:hover {
            color: #787878;
        }
    }
`;

export const TextBtn = styled.span`
    display: none;
    @media (min-width: 768px) {
        display: block;
        font-family: 'Circe';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        margin-left: 8px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
