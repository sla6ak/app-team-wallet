import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useIsActivTokenQuery } from 'redux/authAPI';
import { useEffect } from 'react';
import { isUserName } from 'redux/sliceUserName';
import { VerifyPage } from 'views/verifyPage/verifyPage';
import Media from 'react-media';

import HomeTab from 'components/homeTab/HomeTab';
import Statistics from 'components/statistics/Statistics';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import PublicRoute from 'components/publicRoute/PublicRoute';
import Currency from 'components/currency/Currency';
import LoginPage from 'views/loginPage/LoginPage';
import RegisterPage from 'views/registerPage/RegisterPage';
import DashboardPage from 'views/dashboardPage/DashboardPage';
import Layout from 'layouts/Layout';


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
