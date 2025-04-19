import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    const navigation = useNavigation();
    return (
        <div>
            <h2 className='font-semibold text-xl mb-5'>Dragon News Home</h2>
            {navigation.state == "loading" ? (
                <div className="flex justify-center">
                    <span className="loading loading-spinner text-warning"></span>
                </div>
            ) : (<div className='space-y-[30px]'>
                {news.map(singleNews => <NewsCard singleNews={singleNews} key={singleNews._id} />)}
            </div>)}
        </div>
    );
};

export default CategoryNews;