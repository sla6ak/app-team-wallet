import React, { useEffect } from 'react';
import { ButtonWrapper, ModalTitle, FormaCastom } from './ModalTransactions.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAddNewTransactionMutation } from 'redux/transactionAPI';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClose }) => {
    const [addTransaction] = useAddNewTransactionMutation();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        // test
        // console.log('moda compon');
    }, []);

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit: async values => {
            setDisabled(true);
            try {
                const respons = await addTransaction(values);

                if (respons.data.error) {
                    toast.error('Transaction error');
                    setDisabled(false);
                    return;
                }
                if (respons.data) {
                    toast.success('Transaction ADD!');
                }
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });

    return (
        <>
            <ModalTitle>Add transaction</ModalTitle>
            <FormaCastom onSubmit={formik.handleSubmit}>
                <ButtonWrapper>
                    <GeneralButton fullWidth variant={'contained'} bts={'submit'} disabled={disabled} type="submit">
                        ADD
                    </GeneralButton>
                    <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                        CANCEL
                    </GeneralButton>
                </ButtonWrapper>
            </FormaCastom>
        </>
    );
};

export default ModalTransactions;
