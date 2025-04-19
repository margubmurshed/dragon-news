import React from 'react';
import Header from '../components/Header';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Loading';

const NewsDetails = () => {
    const navigation = useNavigation();
    const response = useLoaderData();
    const news = response.data[0]
    return (
        <div className='max-w-6xl mx-auto'>
            <header>
                <Header />
            </header>
            <main className='grid grid-cols-12 gap-5 mt-8'>
                <section className='col-span-9'>
                    {
                        navigation.state == "loading" ? (
                            <div><Loading /></div>
                        ) : <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src={news?.image_url}
                                alt="News Thumbnail"
                                className="w-full"
                            />
                            <div className="p-5 space-y-3">
                                <h2 className="text-lg font-semibold text-gray-900">{news?.title}</h2>
                                <p className="text-sm text-gray-500">
                                    {news?.details}
                                </p>
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={news?.author.img}
                                        alt={news?.author.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">{news?.author.name}</p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(news?.author.published_date).toDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <Link to={`/category/${news?.category_id}`} className="btn btn-outline btn-primary text-sm">
                                        ← All news in this category
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </section>
                <aside className='col-span-3'>
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;