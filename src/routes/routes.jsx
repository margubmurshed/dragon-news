import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

export const router = createBrowserRouter([
    {path:"/", element:<HomeLayout />},
    {path: "/news", element: <h1>News</h1>},
    {path: "/login", element: <h1>Login</h1>}
])