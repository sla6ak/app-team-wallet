import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from 'helpers/validationForm';
import { Button, TextField, InputLabel, InputAdornment } from '@mui/material';
import { useRegistrationUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, AccountBox } from '@mui/icons-material';

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
            setDisabled(true);
            if (values.password !== values.dublePassword) {
                return; // нужно сообщить юзеру об ошибке так нельзя оставлять
            }
            try {
                await createUser(values);
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });
    return (
        <>
            <div>Wallet</div>

            <form onSubmit={formik.handleSubmit}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <TextField
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
                                <Mail />
                            </InputAdornment>
                        ),
                    }}
                />
                <InputLabel htmlFor="password">Password</InputLabel>

                <TextField
                    required
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder={'Password'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <InputLabel htmlFor="dublePassword">Confirm password</InputLabel>

                <TextField
                    required
                    id="dublePassword"
                    name="dublePassword"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.dublePassword}
                    placeholder={'Confirm password'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />

                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <InputLabel htmlFor="firstName">First Name</InputLabel>

                <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder={'First Name'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountBox />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button variant={'contained'} disabled={disabled} type="submit">
                    Register
                </Button>
                <Button variant={'outlined'} onClick={() => navigate('/login', { replace: true })}>
                    Log in
                </Button>
            </form>
        </>
    );
};

export default RegisterPage;
