import Media from 'react-media';
import TableMobile from '../../components/table/TableMobile';
import TableLarge from '../../components/table/TableLarge';
import { useAllTransactionsQuery } from 'redux/transactionAPI';
import { useEffect } from 'react';

const HomeTab = () => {
    const { data: allTransactions } = useAllTransactionsQuery();
    useEffect(() => {
        console.log(allTransactions);
    });
    return (
        <>
            {allTransactions ? (
                <>
                    <Media
                        query="(max-width: 767px)"
                        render={() => <TableMobile allTransactions={allTransactions} />}
                    />
                    <Media query="(min-width: 768px)" render={() => <TableLarge allTransactions={allTransactions} />} />
                </>
            ) : null}
        </>
    );
};

export default HomeTab;
