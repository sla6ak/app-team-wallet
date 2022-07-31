import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { TableStyled, TabWraper } from './TableMobile.styled';

const TableMobile = () => {
    const example = '12345';
    return (
        <TabWraper>
            <TableContainer sx={TableStyled}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Comment</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Sum</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Balance</TableCell>
                            <TableCell align="right">{example}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </TabWraper>
    );
};

export default TableMobile;
