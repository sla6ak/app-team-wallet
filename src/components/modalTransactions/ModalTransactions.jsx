import React from 'react';
import {
    WrapperTransaction,
    FormaCastom,
    ModalTitle,
    CustomSwitch,
    InputWrapper,
    InlineWrapper,
    ButtonWrapper,
} from './ModalTransactions.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAddNewTransactionMutation } from 'redux/transactionAPI';
import { transactionSchema } from '../../helpers/validationForm';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClose }) => {
    const [addTransaction] = useAddNewTransactionMutation();
    const [disabled, setDisabled] = useState(false);
    const [categories, setCategories] = useState(true);

    const income = [
        {
            value: 'salary',
            label: 'Salary',
        },
        {
            value: 'gift',
            label: 'Gift',
        },
        {
            value: 'other',
            label: 'Other',
        },
    ];
    const expence = [
        {
            value: 'main',
            label: 'Main',
        },
        {
            value: 'food',
            label: 'Food',
        },
        {
            value: 'auto',
            label: 'Auto',
        },
        {
            value: 'development',
            label: 'Development',
        },
        {
            value: 'children',
            label: 'Children',
        },
        {
            value: 'house',
            label: 'House',
        },
    ];

    const handleSwitchChange = e => {
        setCategories(e.target.checked);
    };

    const formik = useFormik({
        initialValues: {
            category: '',
            sum: '',
            date: new Date(),
            comment: '',
        },
        validationSchema: transactionSchema,
        onSubmit: async values => {
            console.log(values);
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
            <WrapperTransaction>
                <ModalTitle>Add transaction</ModalTitle>
                <FormaCastom onSubmit={formik.handleSubmit}>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <Typography>Income</Typography>
                        <CustomSwitch checked={categories} onChange={handleSwitchChange} />
                        <Typography>Expense</Typography>
                    </Stack>

                    <InputWrapper>
                        <TextField
                            fullWidth
                            variant="standard"
                            id="category"
                            name="category"
                            select
                            placeholder="Select a category"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                        >
                            {(categories ? income : expence).map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </InputWrapper>

                    <InlineWrapper>
                        <InputWrapper>
                            <TextField
                                fullWidth
                                variant="standard"
                                id="sum"
                                name="sum"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.sum}
                                // label="Number"
                                placeholder="0.00"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <TextField
                                fullWidth
                                variant="standard"
                                id="date"
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.date}
                            />
                        </InputWrapper>
                    </InlineWrapper>

                    <InputWrapper>
                        <TextField
                            fullWidth
                            multiline
                            rows={2}
                            variant="standard"
                            id="comment"
                            name="comment"
                            type="string"
                            label="Comment"
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <GeneralButton fullWidth variant={'contained'} bts={'submit'} disabled={disabled} type="submit">
                            ADD
                        </GeneralButton>
                        <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                            CANCEL
                        </GeneralButton>
                    </ButtonWrapper>
                </FormaCastom>
            </WrapperTransaction>
        </>
    );
};

export default ModalTransactions;
