import React from "react";
import { FaEye, FaStar, FaShareAlt, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
    const {
        _id,
        title,
        image_url,
        author,
        details,
        total_view,
        rating,
    } = singleNews;

    const truncateText = (text = "", maxLength = 347) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <div className="card bg-base-100 shadow-md border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={author?.img} alt={author?.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">{author?.name || "Unknown Author"}</p>
                        <p className="text-xs text-gray-500">{author?.published_date?.split(" ")[0]}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-xl text-gray-500">
                    <FiBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <div className="px-6 pt-4">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            </div>

            {/* Image */}
            <figure className="px-6 pt-4">
                <img src={image_url} alt="news" className="rounded-xl w-full object-cover" />
            </figure>

            {/* Details */}
            <div className="px-6 pt-4 text-sm text-gray-600">
                {truncateText(details, 347)}{" "}
                <Link to={`/news/${_id}`} className="text-orange-500 font-medium cursor-pointer">Read More</Link>
            </div>

            {/* Footer */}
            <div className="card-actions flex justify-between items-center px-6 py-4 border-t mt-4">
                <div className="flex items-center gap-1 text-orange-400 text-lg">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const currentRating = index + 1;
                        if (rating.number >= currentRating) {
                            return <FaStar key={index} />;
                        } else if (rating.number >= currentRating - 0.5) {
                            return <FaStarHalfAlt key={index} />;
                        } else {
                            return <FaRegStar key={index} />;
                        }
                    })}
                    <span className="text-sm font-medium text-gray-700 ml-1">{rating.number}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
