import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const WrapStyled = {
    height: '70vh',
};

export const TableCellHeadStyled = styled(TableCell)`
    background-color: #ffffff;
    border: 0;
    font-family: 'Circe';
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
`;

export const TableCellValueStyled = styled(TableCell)`
    font-family: 'Circe';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const TableCellStyledRight = {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
};
export const TableCellStyledleft = {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
};
