import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'helpers/validationForm';
import { TextField, InputLabel, InputAdornment } from '@mui/material';
import TitleWallet from 'components/titleWallet/TitleWallet';
import { ModalForma, BoxButton, InputBox, FormaCastom, ErrorLabel } from './LoginPage.styled';
import { useLoginUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from '@mui/icons-material';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import GeneralButton from 'components/generalButton/GeneralButton';

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
        <BacgroundGreeting page={'login'}>
            <ModalForma>
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
                            type="text"
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
                    <BoxButton>
                        <GeneralButton text={'Login'} disabled={disabled} type="submit" />
                        {/* <GeneralButtonLink
                            text={'Register'}
                            bts={'link'}
                            variant={'outlined'}
                            onClick={() => navigate('/register', { replace: true })}
                        /> */}
                    </BoxButton>
                </FormaCastom>
            </ModalForma>
        </BacgroundGreeting>
    );
};

export default LoginPage;
