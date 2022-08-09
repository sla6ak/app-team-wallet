import { Table, TableHead, TableBody, TableContainer, TableRow } from '@mui/material';
import {
    TableCellStyledleft,
    TableCellStyledRight,
    TableCellHeadStyled,
    TableCellValueStyled,
    WrapStyled,
} from './TableLarge.styled';

const TableLarge = ({ allTransactions }) => {
    return (
        <TableContainer sx={WrapStyled}>
            <Table sx={{ minWidth: 704 }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCellHeadStyled sx={TableCellStyledleft}>Date</TableCellHeadStyled>
                        <TableCellHeadStyled align="left">Type</TableCellHeadStyled>
                        <TableCellHeadStyled align="left">Category</TableCellHeadStyled>
                        <TableCellHeadStyled align="left">Comment</TableCellHeadStyled>
                        <TableCellHeadStyled align="right">Sum</TableCellHeadStyled>
                        <TableCellHeadStyled sx={TableCellStyledRight} align="right">
                            Balance
                        </TableCellHeadStyled>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allTransactions.transactions.map(data => (
                        <TableRow
                            key={data._id}
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
                            <TableCellValueStyled>
                                {data.date.day}.{data.date.month}.{data.date.year}
                            </TableCellValueStyled>
                            <TableCellValueStyled align="left">{data.type}</TableCellValueStyled>
                            <TableCellValueStyled align="left">{data.category}</TableCellValueStyled>
                            <TableCellValueStyled
                                style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                align="left"
                            >
                                {data.comment}
                            </TableCellValueStyled>
                            <TableCellValueStyled
                                style={{ color: data.type === 'income' ? '#24CCA7' : '#FF6596' }}
                                align="right"
                            >
                                {data.sum}
                            </TableCellValueStyled>
                            <TableCellValueStyled align="right">{data.balanceAfterTransaction}</TableCellValueStyled>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableLarge;
