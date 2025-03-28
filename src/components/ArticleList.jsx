import React from 'react';
import { useSelector } from 'react-redux';

const ArticleList = () => {
    const articles = useSelector(state => state.articles);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-[#00161D] mb-8">Исторические материалы</h2>

            {articles.length === 0 ? (
                <p className="text-center py-12 text-gray-500">Пока нет публикаций</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            {article.image && (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#00161D] mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-gray-700">{article.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticleList;