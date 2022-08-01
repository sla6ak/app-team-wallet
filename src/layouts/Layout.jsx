import { Suspense } from 'react';
import AppBar from '../components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react';

const Layout = () => {
    const theme = createTheme();
    const isLoggedIn = true;

    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<h1>Loading...</h1>}>
                {isLoggedIn && <AppBar />}
                <Outlet />
            </Suspense>
        </ThemeProvider>
    );
};

export default Layout;

// тут опишем лоадинги всякие покуда загружаем страницы либо данные с бека
