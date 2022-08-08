import { object, string, number, date } from 'yup';

export const loginSchema = object().shape({
    email: string().email('Invalid email').required('Email must by required'),
    password: string()
        .min(6, 'Password must be longer than 6 letters!')
        .max(12, 'Password must be shorts than 12 letters!')
        .required('Password must by required'),
});

export const registerSchema = object().shape({
    firstName: string()
        .min(2, 'Name must be longer than 2 letters!')
        .max(30, 'Name must be shorts than 30 letters!')
        .required('Name must by required'),
    password: string()
        .min(6, 'Password must be longer than 6 letters!')
        .max(12, 'Password must be shorts than 12 letters!')
        .required('Password must by required'),
    dublePassword: string()
        .min(6, 'Password must be longer than 6 letters!')
        .max(12, 'Password must be shorts than 12 letters!')
        .required('Password must by required'),
    email: string().email('Invalid email').required('Email must by required'),
});

export const transactionSchema = object().shape({
    category: string().required('You must select a category...'),
    type: string().required('type is required...'),
    sum: number().required('You need to enter an amount...'),
    date: date().default(() => new Date()),
    comment: string().min(3, 'Comment must be longer than 3 letters...'),
});
