import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react';

const Layout = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </ThemeProvider>
    );
};

export default Layout;

// тут опишем лоадинги всякие покуда загружаем страницы либо данные с бека
