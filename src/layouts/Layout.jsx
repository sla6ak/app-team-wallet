import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
        </Suspense>
    );
};

export default Layout;

// тут опишем лоадинги всякие покуда загружаем страницы либо данные с бека
