import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='min-h-screen h-full bg-[#F3F3F3] font-poppins'>
            <div className='max-w-6xl mx-auto h-full'>
                <header>
                    <nav className='pt-10'>
                        <Navbar />
                    </nav>
                </header>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;