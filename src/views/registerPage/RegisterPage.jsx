import React from 'react';
import BacgroundGreeting from 'components/bacgroundGreeting/BacgroundGreeting';
import RegisterForm from 'components/registerForm/RegisterForm';

const RegisterPage = () => {
    return (
        <BacgroundGreeting page={'register'}>
            <RegisterForm />
        </BacgroundGreeting>
    );
};

export default RegisterPage;
