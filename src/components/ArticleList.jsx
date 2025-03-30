import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, removeArticle } from '../store/slices/articlesSlice'; // Добавьте deleteArticle в импорт
import { useAuth } from "../hooks/use-auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../fireBase'; // Импортируйте вашу конфигурацию Firebase

const ArticleList = () => {
    const dispatch = useDispatch();
    const { items: articles, status, error } = useSelector(state => state.articles);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const imageRefs = useRef({});

    const { email } = useAuth(); // Предполагаем, что useAuth возвращает isAdmin

    // Автоматическая загрузка при монтировании
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    // Инициализация индексов изображений
    useEffect(() => {
        const initialIndexes = {};
        articles.forEach(article => {
            if (article.images?.length) {
                initialIndexes[article.id] = 0;
            }
        });
        setCurrentImageIndex(initialIndexes);
    }, [articles]);

    const handleNextImage = (articleId, imagesLength) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [articleId]: (prev[articleId] + 1) % imagesLength
        }));
    };

    const handlePrevImage = (articleId, imagesLength) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [articleId]: (prev[articleId] - 1 + imagesLength) % imagesLength
        }));
    };

    // Обработка начала касания
    const handleTouchStart = (e, articleId) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    // Обработка движения пальца
    const handleTouchMove = (e, articleId) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    // Обработка окончания касания
    const handleTouchEnd = (articleId, imagesLength) => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNextImage(articleId, imagesLength);
        } else if (isRightSwipe) {
            handlePrevImage(articleId, imagesLength);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // Функция удаления статьи
    const handleDeleteArticle = async (articleId) => {
        if (email !== 'admin@gmail.com') return;

        try {
            // Удаление из Firestore
            await deleteDoc(doc(db, "articles", articleId));

            // Обновление состояния Redux
            dispatch(removeArticle(articleId));

            console.log("Статья успешно удалена");
        } catch (error) {
            console.error("Ошибка при удалении статьи: ", error);
        }
    };

    if (status === 'loading') {
        return <div className="text-center py-12">Загрузка статей...</div>;
    }

    if (status === 'failed') {
        return <div className="text-center py-12 text-red-500">Ошибка: {error}</div>;
    }

    return (
        <div className="max-w-7xl w-3xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-[#00161D] mb-8">Исторические материалы</h2>

            {articles.length === 0 ? (
                <p className="text-center py-12 text-gray-500">Нет доступных статей</p>
            ) : (
                <div className="grid grid-cols-1 gap-8 w-full">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            {/* Кнопка удаления (только для админов) */}
                            {email === 'admin@gmail.com' && (
                                <button
                                    onClick={() => handleDeleteArticle(article.id)}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 z-10 hover:bg-red-600 transition-colors"
                                    aria-label="Delete article"
                                    title="Удалить статью"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            )}

                            {article.images?.length > 0 && (
                                <div className="h-90 overflow-hidden relative">
                                    <div
                                        className="relative h-full w-full"
                                        ref={el => imageRefs.current[article.id] = el}
                                        onTouchStart={(e) => handleTouchStart(e, article.id)}
                                        onTouchMove={(e) => handleTouchMove(e, article.id)}
                                        onTouchEnd={() => handleTouchEnd(article.id, article.images.length)}
                                    >
                                        <img
                                            src={article.images[currentImageIndex[article.id] || 0]}
                                            alt={`${article.title} - ${currentImageIndex[article.id] + 1 || 1}`}
                                            className="w-full h-full object-cover select-none"
                                            draggable="false"
                                        />

                                        {article.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() => handlePrevImage(article.id, article.images.length)}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 hidden md:block"
                                                    aria-label="Previous image"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={() => handleNextImage(article.id, article.images.length)}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 hidden md:block"
                                                    aria-label="Next image"
                                                >
                                                    →
                                                </button>
                                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                                    {article.images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentImageIndex(prev => ({
                                                                ...prev,
                                                                [article.id]: idx
                                                            }))}
                                                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex[article.id] === idx ? 'bg-white w-4' : 'bg-white/50'}`}
                                                            aria-label={`Go to image ${idx + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#00161D] mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{article.text}</p>
                            </div>
                            {email === 'admin@gmail.com' ?
                                (
                                    <p>{article.authorId}</p>
                                )
                                :
                                null
                            }
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticleList;