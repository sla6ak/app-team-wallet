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
                    <Checkbox>
                        {checked
                        ? <ActivePlus>Income</ActivePlus>
                        : <NoActivePlus>Income</NoActivePlus>
                        }
                        <label htmlFor={'isIncome'}>
                        <Switch
                            id={'isIncome'}
                            name={'isIncome'}
                            onSwitch={handleSwitchChange}
                            isChecked={checked}
                            onClick={handleSwitchChange}
                        />
                        </label>
                        {checked
                        ? <NoActiveMinus>Expense</NoActiveMinus>
                        : <ActiveMinus>Expense</ActiveMinus>
                        }
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
                            {(categories ? income : expence).map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
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
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
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