import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins max-w-6xl mx-auto px-3 xl:px-0'>
            <header>
                <Header />
                <section className='mt-[30px]'>
                    <LatestNews />
                </section>
            </header>
            <nav className='mt-5'>
                <Navbar />
            </nav>
            <main className='grid grid-cols-12 gap-6 mt-20'>
                <aside className='col-span-3'>
                    <LeftNavbar />
                </aside>
                <section className='col-span-6'><Outlet /></section>
                <aside className='col-span-3'>
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;