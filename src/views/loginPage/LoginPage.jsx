import React from 'react';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import LoginForm from 'components/loginForm/LoginForm';

const LoginPage = () => {
    return (
        <BacgroundGreeting page={'login'}>
            <LoginForm />
        </BacgroundGreeting>
    );
};

export default LoginPage;
