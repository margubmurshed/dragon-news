import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 flex items-center gap-5'>
            <span className='bg-[#D72050] text-white px-6 py-2 font-semibold'>Latest</span>
            <Marquee pauseOnHover className='space-x-5'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, commodi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, commodi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, commodi.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;