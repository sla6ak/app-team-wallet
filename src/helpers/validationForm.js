import { object, string } from 'yup';

export const loginSchema = object().shape({
    email: string().email('Invalid email').required('Email must by required'),
    password: string()
        .min(6, 'Password must be longer than 6 letters!')
        .max(12, 'Password must be shorts than 20 letters!')
        .required('Password must by required'),
});

export const registerSchema = object().shape({
    name: string()
        .min(2, 'Name must be longer than 2 letters!')
        .max(30, 'Name must be shorts than 30 letters!')
        .required('Name must by required'),
    password: string()
        .min(6, 'Password must be longer than 6 letters!')
        .max(12, 'Password must be shorts than 12 letters!')
        .required('Password must by required'),
    email: string().email('Invalid email').required('Email must by required'),
});
