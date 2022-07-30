import {
    Container,
    Header,
    Table,
    ListCurrency,
} from './Currency.styled';

const Currency = () => {
    return (
        <Container>
            <Header>
                <li>Currency</li>
                <li>Purchase</li>
                <li>Sale</li>
            </Header>
            <Table>
                <ListCurrency>
                    <li><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                </ListCurrency>
            </Table>
        </Container>
    )
}

export default Currency;