import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import {
    TableHeadStyled,
    TableCellStyledleft,
    TableCellStyledRight,
    TabWraper,
    TableCellStyled,
} from './TableLarge.styled';

const TableLarge = () => {
    const data = [
        {
            date: '23.05.22',
            type: '+',
            category: 'Other',
            comment: 'Gift for your wife',
            sum: 300,
            balance: 6900,
        },
        {
            date: '24.05.22',
            type: '-',
            category: 'Other',
            comment: 'Gift for your wife',
            sum: 300,
            balance: 6900,
        },
    ];
    return (
        <TabWraper>
            <TableContainer>
                <Table sx={{ minWidth: 704 }} aria-label="simple table">
                    <TableHead sx={TableHeadStyled}>
                        <TableRow>
                            <TableCellStyled sx={TableCellStyledleft}>Date</TableCellStyled>
                            <TableCellStyled align="center">Type</TableCellStyled>
                            <TableCellStyled align="center">Category</TableCellStyled>
                            <TableCellStyled align="center">Comment</TableCellStyled>
                            <TableCellStyled align="center">Sum</TableCellStyled>
                            <TableCellStyled sx={TableCellStyledRight} align="center">
                                Balance
                            </TableCellStyled>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(data => (
                            <TableRow key={data.date}>
                                <TableCell component="th" scope="row">
                                    {data.date}
                                </TableCell>
                                <TableCell align="center">{data.type}</TableCell>
                                <TableCell align="center">{data.category}</TableCell>
                                <TableCell align="center">{data.comment}</TableCell>
                                <TableCell style={{ color: data.type === '+' ? 'green' : 'red' }} align="center">
                                    {data.sum}
                                </TableCell>
                                <TableCell align="center">{data.balance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabWraper>
    );
};

export default TableLarge;
