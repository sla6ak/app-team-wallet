import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Greeeting = styled.span`
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
    margin-right: 8px;

    @media (min-width: 768px) {
        &:after {
            position: absolute;
            content: '|';
            display: inline-block;
            opacity: 1;
            width: 1px;
            height: 30px;
            margin-left: 12px;
        }
    }
`;

export const LogOutBtn = styled(Button)`
    color: #bdbdbd;
    min-width: 0px;
    padding: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
    @media (min-width: 768px) {
        margin-left: 12px;
        padding-top: 28px;
        padding-bottom: 28px;
        &:after {
            content: 'exit';
            font-family: 'Circe';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            padding-top: 28px;
            padding-bottom: 28px;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
