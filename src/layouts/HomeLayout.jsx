import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins max-w-6xl mx-auto'>
            <header>
                <Header />
                <section className='mt-[30px]'>
                    <LatestNews />
                </section>
            </header>
            <nav className='mt-5'>
                <Navbar />
            </nav>
            <main className='grid grid-cols-12 mt-20'>
                <aside className='col-span-3'>left</aside>
                <section className='col-span-6'>content</section>
                <aside className='col-span-3'>right</aside>
            </main>
        </div>
    );
};

export default HomeLayout;