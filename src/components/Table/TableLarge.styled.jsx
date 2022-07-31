import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const TabWraper = styled.div`
    margin-left: 32px;
    margin-right: 32px;
`;

export const TableCellHeadStyled = styled(TableCell)`
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
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const TableHeadStyled = {
    backgroundColor: '#ffffff',
    border: 0,

    '&:last-child td': {
        borderBottom: 0,
    },
};

export const TableCellStyledRight = {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
};
export const TableCellStyledleft = {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
};

// export const TableDataRow = styled(TableRow)`
//     :last-child {
//         border-bottom: none;
//     }
// `;
