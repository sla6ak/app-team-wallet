import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { TextField, InputLabel, InputAdornment, IconButton } from '@mui/material';
import { Mail, Lock, AccountBox, Visibility, VisibilityOff } from '@mui/icons-material';
import { useRegistrationUserMutation } from 'redux/authAPI';
import { registerSchema } from 'helpers/validationForm';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { ProgressBar } from 'components/progressBar/progressBar';
import TitleWallet from 'components/titleWallet/TitleWallet';
import { BoxButton, InputBox, FormaCastom, ErrorLabel } from '../loginForm/LoginForm.styled';
import { RegisterModalForma, ShowPasswordBtnStyles } from './RegisterForm.styled';

const RegisterForm = () => {
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
            }
            try {
                const respons = await createUser({
                    name: values.firstName,
                    password: values.password,
                    email: values.email,
                });
                if (respons.error) {
                    toast.error('User not created');
                    setDisabled(false);
                    return;
                }
                if (respons.data.name) {
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
                                        {showPassword ? <Visibility /> : <VisibilityOff sx={ShowPasswordBtnStyles} />}
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
                                        {showPassword ? <Visibility /> : <VisibilityOff sx={ShowPasswordBtnStyles} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.values.dublePassword && (
                        <ProgressBar progressBarParams={formik.values?.dublePassword.length} />
                    )}
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
    );
};

export default RegisterForm;
