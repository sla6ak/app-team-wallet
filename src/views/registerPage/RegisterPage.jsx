import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from 'helpers/validationForm';
import { TextField, InputLabel, InputAdornment, IconButton } from '@mui/material';
import { useRegistrationUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, AccountBox, Visibility, VisibilityOff } from '@mui/icons-material';
import { RegisterModalForma, ShowPasswordBtnStyles } from './RegisterPage.styled';
import TitleWallet from 'components/titleWallet/TitleWallet';
import { BoxButton, InputBox, FormaCastom, ErrorLabel } from '../loginPage/LoginPage.styled';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { toast } from 'react-toastify';

import { ProgressBar } from '../../components/progressBar/progressBar';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!
// инпут лабел нарочно оставил идея отображать с их помощью ошибки если они падают в доках это есть! https://mui.com/material-ui/react-text-field/#validation

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [createUser] = useRegistrationUserMutation();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: { firstName: '', password: '', email: '', dublePassword: '' },
        validationSchema: registerSchema,
        onSubmit: async values => {
            setDisabled(true);
            if (values.password !== values.dublePassword) {
                toast.error('Passwords do not match');
                setDisabled(false);
                return; // нужно сообщить юзеру об ошибке так нельзя оставлять
            }
            try {
                const respons = await createUser({
                    name: values.firstName,
                    password: values.password,
                    email: values.email,
                });
                console.log(respons.error);
                if (respons.error) {
                    toast.error('User not created');
                    setDisabled(false);
                    return;
                }
                if (respons.data.user.name) {
                    toast.success('Check your email for verification!');
                    navigate('/login', { replace: true });
                }
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
                            type={showPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder={'Password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff sx={ShowPasswordBtnStyles} />
                                            )}
                                        </IconButton>
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
                            type={showPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            value={formik.values.dublePassword}
                            placeholder={'Confirm password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff sx={ShowPasswordBtnStyles} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <ProgressBar progressBarParams={formik.values?.dublePassword.length} />
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
