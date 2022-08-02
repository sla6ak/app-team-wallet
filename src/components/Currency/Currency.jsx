import { useEffect, useState } from 'react';
import {
    Container,
    Header,
    Table,
    ListCurrency,
    ItemCurrency,
} from './Currency.styled';

const Currency = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(response => response.json())
        .then(response => setData(response))
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
        {data && (
            <Container>
                <Header>
                    <li>Currency</li>
                    <li>Purchase</li>
                    <li>Sale</li>
                </Header>
                <Table>
                    <ListCurrency>
                    {data.map(item => (
                        <ItemCurrency key={item.ccy}>
                            <span>{item.ccy}</span>
                            <span>{Number(item.buy)}</span>
                            <span>{Number(item.sale)}</span>
                        </ItemCurrency>
                    ))}
                    </ListCurrency>
                </Table>
            </Container>
        )}
        </>
    );
}

export default Currency;