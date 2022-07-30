import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from 'views/registerPage/RegisterPage';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import PublicRoute from 'components/publicRoute/PublicRoute';
import HomePage from 'views/homePage/HomePage';
import LoginPage from 'views/loginPage/LoginPage';
import Layout from 'layouts/Layout';
import StatisticPage from 'views/statisticPage/StatisticPage';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/statistic"
                        element={
                            <PrivateRoute>
                                <StatisticPage />
                            </PrivateRoute>
                        }
                    />
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
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
