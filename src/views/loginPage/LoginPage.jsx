import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'helpers/validationForm';
import { Button, Input, InputLabel } from '@mui/material';
import { useLoginUserMutation } from 'redux/authAPI';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!

const LoginPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [loginUser] = useLoginUserMutation();
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
            <div>Wallet</div>
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <InputLabel htmlFor="email">Email Address</InputLabel>

                <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <InputLabel htmlFor="password">password</InputLabel>

                <Input
                    required
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <Button variant={'contained'} disabled={disabled} type="submit">
                    Login
                </Button>
                <Button variant={'outlined'}>Register</Button>
            </form>
        </>
    );
};

export default LoginPage;
