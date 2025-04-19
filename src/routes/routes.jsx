import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: "/", element: <HomeLayout />, children: [
            { index: true, element: <Navigate to="/category/01" /> },
            { path: "/category/:id", element: <CategoryNews />, loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`) }
        ]
    },
    { path: "/news/:id", element: <PrivateRoute><NewsDetails /></PrivateRoute>, loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`) },
    {
        path: "/auth", element: <AuthLayout />, children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ]
    }
])