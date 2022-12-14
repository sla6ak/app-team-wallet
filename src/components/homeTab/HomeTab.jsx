import { useState } from 'react';
import Media from 'react-media';
import TableMobile from '../../components/table/TableMobile';
import TableLarge from '../../components/table/TableLarge';
import NoDataPlug from '../../components/noDataPlug/NoDataPlug';
import { useAllTransactionsQuery } from 'redux/transactionAPI';
import ModalTransactions from 'components/modalTransactions/ModalTransactions';
import Modal from 'components/modal/Modal';
import { AddIcn, PlusBtn } from './HomeTabe.styled';

const HomeTab = () => {
    const [modal, setModal] = useState(false);

    const { data: allTransactions } = useAllTransactionsQuery();
    return (
        <div style={{ position: 'relative' }}>
            <PlusBtn
                onClick={() => {
                    setModal(true);
                }}
            >
                <AddIcn />
            </PlusBtn>
            {allTransactions ? (
                <>
                    {allTransactions.transactions.length !== 0 ? (
                        <>
                            <Media
                                query="(max-width: 767px)"
                                render={() => <TableMobile allTransactions={allTransactions} />}
                            />
                            <Media
                                query="(min-width: 768px)"
                                render={() => <TableLarge allTransactions={allTransactions} />}
                            />
                        </>
                    ) : (
                        <NoDataPlug />
                    )}
                </>
            ) : null}
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalTransactions
                        onModalClose={() => {
                            setModal(false);
                        }}
                    />
                </Modal>
            ) : null}
        </div>
    );
};

export default HomeTab;
