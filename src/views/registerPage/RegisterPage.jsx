import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from 'helpers/validationForm';
import { TextField, InputLabel, InputAdornment } from '@mui/material';
import { useRegistrationUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, AccountBox } from '@mui/icons-material';
import { RegisterModalForma } from './RegisterPage.styled';

import TitleWallet from 'components/titleWallet/TitleWallet';
import { BoxButton, InputBox, FormaCastom, ErrorLabel } from '../loginPage/LoginPage.styled';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!
// инпут лабел нарочно оставил идея отображать с их помощью ошибки если они падают в доках это есть! https://mui.com/material-ui/react-text-field/#validation

const RegisterPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [createUser] = useRegistrationUserMutation();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: { firstName: '', password: '', email: '', dublePassword: '' },
        validationSchema: registerSchema,
        onSubmit: async values => {
            console.log('sabm');
            setDisabled(true);
            if (values.password !== values.dublePassword) {
                return; // нужно сообщить юзеру об ошибке так нельзя оставлять
            }
            try {
                await createUser({
                    name: values.firstName,
                    password: values.password,
                    email: values.email,
                });
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });
    return (
        <BacgroundGreeting page={'register'}>
            <RegisterModalForma>
                <TitleWallet />
                <FormaCastom onSubmit={formik.handleSubmit}>
                    <InputBox>
                        <InputLabel htmlFor="email">
                            {formik.touched.email && formik.errors.email ? (
                                <ErrorLabel>{formik.errors.email}</ErrorLabel>
                            ) : null}
                        </InputLabel>
                        <TextField
                            fullWidth
                            variant={'standard'}
                            required
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder={'Email Address'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </InputBox>
                    <InputBox>
                        <InputLabel htmlFor="password">
                            {formik.touched.password && formik.errors.password ? (
                                <ErrorLabel>{formik.errors.password}</ErrorLabel>
                            ) : null}
                        </InputLabel>

                        <TextField
                            fullWidth
                            variant={'standard'}
                            required
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder={'Password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </InputBox>
                    <InputBox>
                        <InputLabel htmlFor="dublePassword">
                            {formik.touched.dublePassword && formik.errors.dublePassword ? (
                                <ErrorLabel>{formik.errors.dublePassword}</ErrorLabel>
                            ) : null}
                        </InputLabel>

                        <TextField
                            fullWidth
                            variant={'standard'}
                            required
                            id="dublePassword"
                            name="dublePassword"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.dublePassword}
                            placeholder={'Confirm password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </InputBox>

                    <InputBox>
                        <InputLabel htmlFor="firstName">
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <ErrorLabel>{formik.errors.firstName}</ErrorLabel>
                            ) : null}
                        </InputLabel>

                        <TextField
                            fullWidth
                            variant={'standard'}
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            placeholder={'First Name'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBox sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </InputBox>
                    <BoxButton>
                        <GeneralButton variant={'contained'} bts={'submit'} disabled={disabled} type="submit">
                            Register
                        </GeneralButton>
                        <GeneralButton
                            bts={'link'}
                            variant={'outlined'}
                            onClick={() => navigate('/login', { replace: true })}
                        >
                            Log in
                        </GeneralButton>
                    </BoxButton>
                </FormaCastom>
            </RegisterModalForma>
        </BacgroundGreeting>
    );
};

export default RegisterPage;
