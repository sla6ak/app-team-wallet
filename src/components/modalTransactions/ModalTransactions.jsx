import React, { useState }  from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAddNewTransactionMutation } from 'redux/transactionAPI';
import { transactionSchema } from '../../helpers/validationForm';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Switch from 'components/switch/Switch';
import CloseIcon from '@mui/icons-material/Close';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
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
    ModalCloseBtn,
} from './ModalTransactions.styled';


const ModalTransactions = ({ onModalClose }) => {
    const [addTransaction] = useAddNewTransactionMutation();
    const [disabled, setDisabled] = useState(false);
    const [checked, setChecked] = useState(false);
    const [value, onChange] = useState(new Date());

    // function addZero(value) {
    //     return String(value).padStart(2, '0');
    // }

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
            value: 'self care',
            label: 'Self care',
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
            return new Date(Number(date[0]), Number(date[1]), Number(date[2]));
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
            values.date = value;
            values.type = checked ? 'expense' : 'income';
            values.comment = values.comment !== '' ? values.comment : 'none';
            setDisabled(true);
            onModalClose();
            try {
                const respons = await addTransaction(values);

                if (respons.error) {
                    toast.error(respons.error.data.message);
                    setDisabled(false);
                    return;
                }
                if (respons.data) {
                    toast.success('Transaction ADDED!');
                }
            } catch (error) {
                toast.error(error);
            }

            values.type = checked ? 'income' : 'expense';
            values.category = '';
            values.sum = '';
            values.date = String(new Date());
            values.comment = '';
            setDisabled(false);
        },
    });

    return (
        <>
            <WrapperTransaction>
                <ModalCloseBtn onClick={onModalClose}>
                    <CloseIcon />
                </ModalCloseBtn>
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
                                <DateTimePicker
                                    onChange={onChange}
                                    value={value}
                                    maxDate={new Date()}
                                    format="dd-MM-y"
                                    disableClock
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
