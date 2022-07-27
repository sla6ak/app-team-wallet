import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from 'helpers/validationForm';
import { Button, Input, InputLabel } from '@mui/material';
import { useRegistrationUserMutation } from 'redux/authAPI';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!

const RegisterPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [createUser] = useRegistrationUserMutation();
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
                <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <InputLabel htmlFor="password">Password</InputLabel>

                <Input
                    required
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <InputLabel htmlFor="dublePassword">Confirm password</InputLabel>

                <Input
                    required
                    id="dublePassword"
                    name="dublePassword"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.dublePassword}
                />

                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <InputLabel htmlFor="firstName">First Name</InputLabel>

                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <Button variant={'contained'} disabled={disabled} type="submit">
                    Register
                </Button>
                <Button variant={'outlined'}>Log in</Button>
            </form>
        </>
    );
};

export default RegisterPage;
