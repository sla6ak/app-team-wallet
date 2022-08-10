import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import { useIsActivTokenQuery } from 'redux/authAPI';
import { isUserName } from 'redux/sliceUserName';
import { VerifyPage } from 'views/verifyPage/verifyPage';


import HomeTab from 'components/homeTab/HomeTab';
import Statistics from 'components/statistics/Statistics';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import PublicRoute from 'components/publicRoute/PublicRoute';
import Currency from 'components/currency/Currency';
import Layout from 'layouts/Layout';

const DashboardPage = React.lazy(() => import('views/dashboardPage/DashboardPage'));
const LoginPage = React.lazy(() => import('views/loginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('views/registerPage/RegisterPage'));

function App() {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const { data: auth } = useIsActivTokenQuery('', { skip: !token });

    useEffect(() => {
        if (auth === undefined) {
            return;
        }
        dispatch(isUserName(auth.user.name));
    }, [auth, dispatch]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    >
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute>
                                    <HomeTab />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/statistic"
                            element={
                                <PrivateRoute>
                                    <Statistics />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/currency"
                            element={
                                <PrivateRoute>
                                    <Media query="(max-width: 767px)" render={() => <Currency />} />
                                </PrivateRoute>
                            }
                        />
                    </Route>
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login/:verificationToken"
                        element={
                            <PublicRoute>
                                <VerifyPage />
                            </PublicRoute>
                        }
                    />{' '}
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
