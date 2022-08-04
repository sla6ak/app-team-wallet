/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    ModalWrapper,
    Modal,
    ModalCloseBtn,
    ModalTitle,
    CustomSwitch,
    InlineWrapper,
    InputWrapper,
} from './ModalTransactions.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonAdd, ButtonCancel, ButtonWrapper } from './ModalTransactions.styled';
import { useFormik } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// функция закрытия модалки это просто сетСтейт родителя тру или фолс и если фолс то больше не рендерим модалку в родителе : она схлопнется.
const ModalTransactions = ({ onModalClose }) => {
    const [disabled, setDisabled] = useState(false);

    const mouseDownClose = e => {
        if (e.target === e.currentTarget) {
            onModalClose();
        }
    };
    useEffect(() => {
        const keyDownClose = e => {
            if (e.code === 'Escape') {
                onModalClose();
            }
        };

        window.addEventListener('keydown', keyDownClose);
        return () => {
            window.removeEventListener('keydown', keyDownClose);
        };
    }, [onModalClose]);

    const formik = useFormik({
        initialValues: {
            operation: '',
            category: '',
            sum: '',
            date: new Date(),
            comment: '',
        },
        onSubmit: async data => {
            setDisabled(true);
            try {
                await console.log('transaction data log:', data);
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });

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

    const [categories, setCategories] = useState(income);
    const onSwitchCategory = e => {
        console.log(e);
        console.log(e.nativeEvent);
        setCategories(expence);
    };

    return createPortal(
        <ModalWrapper>
            <Modal>
                <div onClick={mouseDownClose}>
                    <ModalCloseBtn onClick={onModalClose}>
                        <CloseIcon />
                    </ModalCloseBtn>
                </div>
                <ModalTitle>Add transaction</ModalTitle>

                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Income</Typography>
                    <CustomSwitch onChange={onSwitchCategory} />
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
                        {categories.map(option => (
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
                    <ButtonAdd fullWidth variant={'contained'} disabled={disabled} onClick={formik.handleSubmit}>
                        ADD
                    </ButtonAdd>
                    <ButtonCancel fullWidth variant={'outlined'} onClick={onModalClose}>
                        CANCEL
                    </ButtonCancel>
                </ButtonWrapper>
            </Modal>
        </ModalWrapper>,

        document.querySelector('#modal')
    );
};

export default ModalTransactions;
