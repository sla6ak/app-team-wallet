import React from 'react';
import {
    WrapperTransaction,
    FormaCastom,
    ModalTitle,
    InlineWrapper,
    ButtonWrapper,
    Inputs,
    DateContainer,
    CountContainer,
    Checkbox,
    ActivePlus,
    NoActivePlus,
    ActiveMinus,
    NoActiveMinus,
} from './ModalTransactions.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAddNewTransactionMutation } from 'redux/transactionAPI';
import { transactionSchema } from '../../helpers/validationForm';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Switch from 'components/switch/Switch';

const ModalTransactions = ({ onModalClose }) => {
    const [addTransaction] = useAddNewTransactionMutation();
    const [disabled, setDisabled] = useState(false);
    const [checked, setChecked] = useState(false);
    function addZero(value) {
        return String(value).padStart(2, '0');
    }
    const dateFormat = `${new Date().getFullYear()}-${addZero(new Date().getMonth() + 1)}-${addZero(
        new Date().getDate()
    )}`;
    const [dates, setDates] = useState(dateFormat);

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
    const expense = [
        {
            value: 'car',
            label: 'Car',
        },
        {
            value: 'food',
            label: 'Food',
        },
        {
            value: 'selfcare',
            label: 'Selfcare',
        },

        {
            value: 'children',
            label: 'Children',
        },
        {
            value: 'house',
            label: 'House',
        },
        {
            value: 'education',
            label: 'Education',
        },
        {
            value: 'leisure',
            label: 'Leisure',
        },
        {
            value: 'other',
            label: 'Other',
        },
    ];

    const handleSwitchChange = e => {
        setChecked(e.target.checked);
    };

    const handleDate = e => {
        setDates(e.target.value);
    };

    const date = value => {
        const date = value?.split('-');
        if (date) {
            return new Date(Number(date[0]), Number(date[1] - 1), Number(date[2]));
        }
    };

    const formik = useFormik({
        initialValues: {
            type: checked ? 'income' : 'expense',
            category: '',
            sum: '',
            date: String(new Date()),
            comment: '',
        },

        validationSchema: transactionSchema,
        onSubmit: async values => {
            values.date = String(date(dates));
            values.type = checked ? 'expense' : 'income';
            values.comment = 'none';
            setDisabled(true);
            try {
                const respons = await addTransaction(values);

                if (respons.error) {
                    toast.error(respons.error.data.message);
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
                    <Checkbox>
                        {!checked ? <ActivePlus> Income </ActivePlus> : <NoActivePlus> Income </NoActivePlus>}
                        <Switch onChange={handleSwitchChange} checked={checked} />
                        {!checked ? <NoActiveMinus>Expense</NoActiveMinus> : <ActiveMinus>Expense</ActiveMinus>}
                    </Checkbox>

                    <Inputs>
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
                            {(checked ? expense : income).map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <InlineWrapper>
                            <CountContainer>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="standard"
                                    id="sum"
                                    name="sum"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.sum}
                                    placeholder="0.00"
                                />
                            </CountContainer>
                            <DateContainer>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="standard"
                                    id="date"
                                    name="date"
                                    type="date"
                                    onChange={handleDate}
                                    value={dates}
                                />
                            </DateContainer>
                        </InlineWrapper>

                        <TextField
                            fullWidth
                            margin="normal"
                            multiline
                            rows={1}
                            variant="standard"
                            id="comment"
                            name="comment"
                            type="string"
                            label="Comment"
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                    </Inputs>

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
