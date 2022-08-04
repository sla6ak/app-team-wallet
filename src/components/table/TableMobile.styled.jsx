import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const TabWraper = styled.div`
    height: 100%;
`;

export const TableStyled = {
    backgroundColor: '#ffffff',
    borderLeft: 5,
    borderRadius: '10px',
    marginBottom: '8px',
};

export const TableCellStyled = styled(TableCell)`
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
