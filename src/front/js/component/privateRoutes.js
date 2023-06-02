import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = ({ user }) => {
    return user?.logged ? <Outlet /> : <Navigate to='public' />;
};
