import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableStyled, TabWraper, TableCellStyled, TableCellValueStyled } from './TableMobile.styled';

const TableMobile = ({ allTransactions }) => {
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
            {data.map(data => (
                <TableContainer
                    key={data.date}
                    sx={TableStyled}
                    style={{ borderColor: data.type === '+' ? 'green' : 'red' }}
                >
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCellStyled align="left">Date</TableCellStyled>
                                <TableCellValueStyled align="right">{data.date}</TableCellValueStyled>
                            </TableRow>
                            <TableRow>
                                <TableCellStyled align="left">Type</TableCellStyled>
                                <TableCellValueStyled align="right">{data.type}</TableCellValueStyled>
                            </TableRow>
                            <TableRow>
                                <TableCellStyled align="left">Category</TableCellStyled>
                                <TableCellValueStyled align="right">{data.category}</TableCellValueStyled>
                            </TableRow>
                            <TableRow>
                                <TableCellStyled align="left">Comment</TableCellStyled>
                                <TableCellValueStyled align="right">{data.comment}</TableCellValueStyled>
                            </TableRow>
                            <TableRow>
                                <TableCellStyled align="left">Sum</TableCellStyled>
                                <TableCellValueStyled
                                    style={{ fontWeight: 700, color: data.type === '+' ? 'green' : 'red' }}
                                    align="right"
                                >
                                    {data.sum}
                                </TableCellValueStyled>
                            </TableRow>
                            <TableRow>
                                <TableCellStyled align="left">Balance</TableCellStyled>
                                <TableCellValueStyled align="right">{data.balance}</TableCellValueStyled>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </TabWraper>
    );
};

export default TableMobile;
