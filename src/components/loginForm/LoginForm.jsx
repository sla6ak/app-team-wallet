import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { TextField, InputLabel, InputAdornment, IconButton } from '@mui/material';
import { Mail, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { newToken } from 'redux/sliceToken';
import { isUserName } from 'redux/sliceUserName';
import { useLoginUserMutation } from 'redux/authAPI';
import { loginSchema } from 'helpers/validationForm';
import TitleWallet from 'components/titleWallet/TitleWallet';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { ModalForma,
    BoxButton,
    InputBox,
    FormaCastom,
    ErrorLabel,
    ShowPasswordBtnStyles
} from './LoginForm.styled';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            setDisabled(true);
            try {
                const respons = await loginUser(values);

                if (respons.error) {
                    toast.error('Email or password is wrong');
                    setDisabled(false);
                    return;
                }
                if (respons.data.user.name) {
                    dispatch(newToken(respons.data.user.token));
                    dispatch(isUserName(respons.data.user.name));
                    toast.success(`Welcome ${respons.data.user.name}!`);
                }
            } catch (error) {
                console.log(error);
            }
            setDisabled(false);
        },
    });

    return (
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
                <BoxButton>
                    <GeneralButton variant={'contained'} bts={'submit'} disabled={disabled} type="submit">
                        Log in
                    </GeneralButton>
                    <GeneralButton
                        bts={'link'}
                        variant={'outlined'}
                        onClick={() => navigate('/register', { replace: true })}
                    >
                        Register
                    </GeneralButton>
                </BoxButton>
            </FormaCastom>
        </ModalForma>
    );
};

export default LoginForm;