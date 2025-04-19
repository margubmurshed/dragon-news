import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data.data.news_category)
            })
    }, [])

    return (
        <div>
            <h2 className='text-[20px] font-semibold text-[#403F3F] mb-[20px]'>All Category</h2>
            <div className='flex flex-col gap-4'>
                {categories.map(category => (
                    <NavLink
                        to={`/category/${category.category_id}`}
                        key={category.category_id}
                        className={({ isActive }) =>
                            `text-[20px] font-semibold px-12 py-4 rounded ${isActive ? "text-[#403F3F] bg-[#E7E7E7]" : "text-[#9F9F9F]"
                            }`
                        }
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>

    );
};

export default LeftNavbar;