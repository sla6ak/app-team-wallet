import Media from 'react-media';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import { TableStyled, TabWraper, TableCellStyled, TableCellValueStyled } from './TableMobile.styled';
import Balance from '../../components/balance/Balance';

const TableMobile = ({ allTransactions }) => {
    function addZero(value) {
        return String(value).padStart(2, '0');
    }
    return (
        <>
            <Media query="(max-width: 767px)" render={() => <Balance />} />
            <TabWraper>
                {allTransactions.transactions
                    .slice()
                    .reverse()
                    .map(data => (
                        <TableContainer
                            key={data._id}
                            sx={TableStyled}
                            style={{ borderColor: data.type === 'income' ? '#24CCA7' : '#FF6596' }}
                        >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCellStyled align="left">Date</TableCellStyled>
                                        <TableCellValueStyled align="right">
                                            {addZero(data.date.day)}.{addZero(data.date.month)}.{data.date.year}
                                        </TableCellValueStyled>
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
                                        <TableCellValueStyled
                                            style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                            align="right"
                                        >
                                            {data.comment}
                                        </TableCellValueStyled>
                                    </TableRow>
                                    <TableRow>
                                        <TableCellStyled align="left">Sum</TableCellStyled>
                                        <TableCellValueStyled
                                            style={{
                                                fontWeight: 700,
                                                color: data.type === 'income' ? '#24CCA7' : '#FF6596',
                                            }}
                                            align="right"
                                        >
                                            {data.sum}
                                        </TableCellValueStyled>
                                    </TableRow>
                                    <TableRow>
                                        <TableCellStyled align="left">Balance</TableCellStyled>
                                        <TableCellValueStyled align="right">
                                            {data.balanceAfterTransaction}
                                        </TableCellValueStyled>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ))}
            </TabWraper>
        </>
    );
};

export default TableMobile;
