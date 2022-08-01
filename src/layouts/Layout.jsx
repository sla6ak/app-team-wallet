import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Loader from 'components/Loader/Loader';

import React from 'react';

const Layout = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </ThemeProvider>
    );
};

export default Layout;

// тут опишем лоадинги всякие покуда загружаем страницы либо данные с бека
