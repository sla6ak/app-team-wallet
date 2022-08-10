import { useEffect, useState } from 'react';
import Loader from 'components/loader/Loader';
import { Container,
    Header,
    Table,
    ListCurrency,
    ItemCurrency,
    Span,
    Title,
} from './Currency.styled';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

const Currency = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        setStatus(Status.PENDING);
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(response => response.json())
            .then(response => {
                setData(response);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                console.log(error);
                setStatus(Status.REJECTED);
            });
    }, []);

    return (
        <>
            {status === Status.PENDING && <Loader />}
            {status === Status.RESOLVED && data && (
                <Container>
                    <Header>
                        <Title>Currency</Title>
                        <Title>Purchase</Title>
                        <Title>Sale</Title>
                    </Header>
                    <Table>
                        <ListCurrency>
                            {data.map(item => (
                                <ItemCurrency key={item.ccy}>
                                    <Span>{item.ccy}</Span>
                                    <Span>{Number(item.buy).toFixed(2)}</Span>
                                    <Span>{Number(item.sale).toFixed(2)}</Span>
                                </ItemCurrency>
                            ))}
                        </ListCurrency>
                    </Table>
                </Container>
            )}
            {status === Status.REJECTED && <div>Error!</div>}
        </>
    );
};

export default Currency;
