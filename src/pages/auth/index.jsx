import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
    const isLogin = localStorage.getItem("token");

    // If the user is logged in, render the child components, otherwise, redirect to the login page
    return isLogin ? children : <Navigate to="/login" replace />;
}

export default Auth;