import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'helpers/validationForm';
import { Button, TextField, InputLabel, Typography, InputAdornment } from '@mui/material';
import { useLoginUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from '@mui/icons-material';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!
// инпут лабел нарочно оставил идея отображать с их помощью ошибки если они падают в доках это есть! https://mui.com/material-ui/react-text-field/#validation

const LoginPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            setDisabled(true);
            try {
                await loginUser(values);
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });
    return (
        <>
            <Typography component="h1" variant="h4">
                Wallet
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
                <InputLabel htmlFor="password">password</InputLabel>

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

                <Button variant={'contained'} disabled={disabled} type="submit">
                    Login
                </Button>
                <Button variant={'outlined'} onClick={() => navigate('/register', { replace: true })}>
                    Register
                </Button>
            </form>
        </>
    );
};

export default LoginPage;
