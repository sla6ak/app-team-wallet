import { Table, TableHead, TableBody, TableContainer, TableRow } from '@mui/material';
import {
    TableCellStyledleft,
    TableCellStyledRight,
    TableCellHeadStyled,
    TableCellValueStyled,
    WrapStyled,
} from './TableLarge.styled';

const TableLarge = ({ allTransaction }) => {
    return (
        <TableContainer sx={WrapStyled}>
            <Table sx={{ minWidth: 704 }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCellHeadStyled sx={TableCellStyledleft}>Date</TableCellHeadStyled>
                        <TableCellHeadStyled align="center">Type</TableCellHeadStyled>
                        <TableCellHeadStyled align="center">Category</TableCellHeadStyled>
                        <TableCellHeadStyled align="center">Comment</TableCellHeadStyled>
                        <TableCellHeadStyled align="center">Sum</TableCellHeadStyled>
                        <TableCellHeadStyled sx={TableCellStyledRight} align="center">
                            Balance
                        </TableCellHeadStyled>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allTransaction?.transactions.map(data => (
                        <TableRow
                            key={data.date}
                            sx={{
                                '&:last-child td': {
                                    borderBottom: 0,
                                },
                                '&:not(:last-child)': {
                                    borderBottom: '1px solid #dcdcdf',
                                    boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.6)',
                                },
                            }}
                        >
                            <TableCellValueStyled>{data.date}</TableCellValueStyled>
                            <TableCellValueStyled align="center">{data.type}</TableCellValueStyled>
                            <TableCellValueStyled align="center">{data.category}</TableCellValueStyled>
                            <TableCellValueStyled align="center">{data.comment}</TableCellValueStyled>
                            <TableCellValueStyled
                                style={{ color: data.type === '+' ? '#24CCA7' : '#FF6596' }}
                                align="center"
                            >
                                {data.sum}
                            </TableCellValueStyled>
                            <TableCellValueStyled align="center">{data.balance}</TableCellValueStyled>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableLarge;
