import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonStyle = styled(Button)(
    ({ theme }) => `
    border-radius: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    background-color: ${theme.colors.green};
    :hover {
        background-color: ${theme.colors.hoverGreen};
    }
`
);
