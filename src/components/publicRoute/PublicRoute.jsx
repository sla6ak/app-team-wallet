import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
    const curentName = useSelector(state => state.userName);

    return curentName.length === 0 ? children : <Navigate to="/" />;
}

export default PublicRoute;
