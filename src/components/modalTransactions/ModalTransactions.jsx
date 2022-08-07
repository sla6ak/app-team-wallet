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
    const [categories, setCategories] = useState(true);
    const [checked, setChecked] = useState(false);

    const [dates, setDates] = useState('');

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
        setChecked(e.target.checked);
        setCategories(e.target.checked);
    };
    const handleDate = e => {
        setDates(e.target.value);
    };

    const date = value => {
        const date = value?.split('-');
        if (date) {
            return new Date(Number(date[0]), Number(date[1]), Number(date[2]));
        }
    };

    const formik = useFormik({
        initialValues: {
            type: categories ? 'expense' : 'income',
            category: '',
            sum: '',
            date: dates,
            comment: '',
        },

        validationSchema: transactionSchema,
        onSubmit: async values => {
            values.date = date(dates);
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
                    <Checkbox>
                        {checked ? <ActivePlus>Income</ActivePlus> : <NoActivePlus>Income</NoActivePlus>}
                        <label htmlFor={'isIncome'}>
                            <Switch
                                id={'isIncome'}
                                name={'isIncome'}
                                onSwitch={handleSwitchChange}
                                isChecked={checked}
                                onClick={handleSwitchChange}
                            />
                        </label>
                        {checked ? <NoActiveMinus>Expense</NoActiveMinus> : <ActiveMinus>Expense</ActiveMinus>}
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
                            {(categories ? expence : income).map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/* <<<<<<< HEAD */}
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
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                />
                            </DateContainer>
                        </InlineWrapper>
                        {/* ======= */}
                    </Inputs>

                    <InlineWrapper>
                        {/* <InputWrapper> */}
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
                        {/* </InputWrapper> */}
                        {/* <InputWrapper> */}
                        <TextField
                            fullWidth
                            variant="standard"
                            id="date"
                            name="date"
                            type="date"
                            onChange={handleDate}
                            value={dates}
                        />
                        {/* </InputWrapper> */}
                    </InlineWrapper>

                    {/* <InputWrapper> */}
                    {/* >>>>>>> 5ae189383055afb6977a3542b0f055c1459de57c */}
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
                    {/* </InputWrapper> */}

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
