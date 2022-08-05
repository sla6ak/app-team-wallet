import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'helpers/validationForm';
import { TextField, InputLabel, InputAdornment } from '@mui/material';
import TitleWallet from 'components/titleWallet/TitleWallet';
import { ModalForma, BoxButton, InputBox, FormaCastom, ErrorLabel } from './LoginPage.styled';
import { useEffect } from 'react';
import { useLoginUserMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from '@mui/icons-material';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { newToken } from '../../redux/sliceToken';
import { isUserName } from 'redux/sliceUserName';
import jwt_decode from 'jwt-decode';

// Это базовые шаблоны конечно нужно все раскидывать по папкам и стилизировать из материал а не дивами!
// инпут лабел нарочно оставил идея отображать с их помощью ошибки если они падают в доках это есть! https://mui.com/material-ui/react-text-field/#validation

const LoginPage = () => {
    const [ user, setUser ] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCallbackResponse(response) {
        console.log("JWT ID token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    };

    useEffect (() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "388811881504-o891is5iin09cguatu4tkct1bu5asm5k.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    }, []);

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

                if (respons.data.error) {
                    toast.error('User not created');
                    setDisabled(false);
                    return;
                }
                if (respons.data.user.name) {
                    dispatch(newToken(respons.data.user.token));
                    dispatch(isUserName(respons.data.user.name));
                    toast.success(`Succesful login user ${respons.data.user.name}!`);
                }
            } catch (error) {
                toast.error('User not created');
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
                        <button id="signInDiv"></button>
                    </BoxButton>
                </FormaCastom>
                {user && (
                    <div>{user.name}</div>
                )}
            </ModalForma>
        </BacgroundGreeting>
    );
};

export default LoginPage;
