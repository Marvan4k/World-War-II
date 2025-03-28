import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useContent from '../hooks/useContent';
import { addArticle } from "../store/slices/articlesSlice";

const ArticleEditor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        content,
        setTitle,
        setText,
        addImage,
        removeImage,
        resetContent,
        isEmpty,
    } = useContent({
        title: 'Великая Отечественная Война',
        text: 'История о стойкости, гармонии, трудолюбии и силы народов.'
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            addImage(imageUrl);
        }
    };

    const handlePublish = () => {
        if (!isEmpty()) {
            dispatch(addArticle({
                title: content.title,
                text: content.text,
                image: content.images[0] || null
            }));
            resetContent();
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen flex items-center bg-[#1A1A1A]">
            <div className="max-w-4xl mx-auto p-8 bg-[#00161D] text-white rounded-lg shadow-xl ">
                {/* Шапка в стиле вашего изображения */}
                <nav className="flex justify-between items-center mb-10 pb-4 border-b border-[#25A18E]">
                    <h1 className="text-2xl font-bold">Редактор исторических материалов</h1>
                    <div className="flex space-x-6">
                        <span className="hover:text-[#25A18E] cursor-pointer">История</span>
                        <span className="hover:text-[#25A18E] cursor-pointer">Лента времени</span>
                        <span className="hover:text-[#25A18E] cursor-pointer">Факты</span>
                        <span className="hover:text-[#25A18E] cursor-pointer">Карты</span>
                    </div>
                </nav>

                {/* Поле заголовка */}
                <div className="mb-8">
                    <label className="block text-[#25A18E] text-lg font-medium mb-3">
                        Заголовок материала
                    </label>
                    <input
                        type="text"
                        value={content.title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-5 py-3 bg-[#003049] border border-[#25A18E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25A18E] text-white placeholder-[#669BBC]"
                        placeholder="Введите заголовок..."
                    />
                </div>

                {/* Поле текста */}
                <div className="mb-8">
                    <label className="block text-[#25A18E] text-lg font-medium mb-3">
                        Основной текст
                    </label>
                    <textarea
                        value={content.text}
                        onChange={(e) => setText(e.target.value)}
                        rows={8}
                        className="w-full px-5 py-3 bg-[#003049] border border-[#25A18E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25A18E] text-white placeholder-[#669BBC]"
                        placeholder="Опишите исторические события..."
                    />
                </div>

                {/* Блок загрузки изображений */}
                <div className="mb-8 p-6 bg-[#003049] rounded-lg border border-[#25A18E]">
                    <label className="block text-[#25A18E] text-lg font-medium mb-4">
                        Архивные материалы
                    </label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <label className="cursor-pointer bg-[#25A18E] hover:bg-[#1d8273] text-white px-6 py-3 rounded-lg transition duration-200 font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Загрузить изображение
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                        <span className="text-[#C2DFE3]">
                {content.images.length} изображений загружено
              </span>
                    </div>

                    {/* Галерея превью */}
                    {content.images.length > 0 && (
                        <div className="mt-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {content.images.map((img, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={img}
                                            alt={`Архивное фото ${index + 1}`}
                                            className="w-full h-40 object-cover rounded-lg border border-[#25A18E]"
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Панель управления */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 pt-6 border-t border-[#25A18E]">
                    <button
                        onClick={resetContent}
                        className="px-6 py-2 bg-[#669BBC] hover:bg-[#547A94] text-white rounded-lg transition duration-200 font-medium"
                    >
                        Очистить форму
                    </button>

                    <div className={`px-6 py-3 rounded-lg font-medium ${
                        isEmpty()
                            ? 'bg-[#FFD166] text-[#8B6B00]'
                            : 'bg-[#06D6A0] text-[#003D2B]'
                    }`}>
                        {isEmpty() ? 'Заполните все поля' : (
                            <button
                                onClick={handlePublish}
                            >
                                Материал готов к публикации
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleEditor;