import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = ({ user }) => {
    return !user.logged ? <Outlet /> : <Navigate to='/home' />;
};
