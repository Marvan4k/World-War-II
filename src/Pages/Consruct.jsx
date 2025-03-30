import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useContent from '../hooks/useContent';

const ConstrPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        content,
        setTitle,
        setText,
        addImage,
        removeImage,
        publishArticle,
        uploading
    } = useContent();

    const fileInputRef = useRef(null);

    // Загрузка данных для редактирования
    useEffect(() => {
        if (location.state?.article) {
            const { title, text, images } = location.state.article;
            setTitle(title);
            setText(text);
            addImage(prev => ({ ...prev, images }));
        }
    }, [location.state]);

    const handlePublish = async () => {
        try {
            await publishArticle();
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="w-full h-full min-h-screen bg-[#394A8E]">
            <div className="max-w-4xl mx-auto p-6 ">
                <h1 className="text-2xl font-bold mb-6 text-white">
                    {location.state?.article ? 'Редактировать блок' : 'Создать новый блок'}
                </h1>

                <input
                    type="text"
                    value={content.title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Заголовок"
                    className="w-full p-3 mb-4 bg-[#00161D] text-white rounded-lg"
                />

                <textarea
                    value={content.text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Текст"
                    rows={8}
                    className="w-full p-3 mb-4 bg-[#00161D] text-white rounded-lg"
                />

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                        const files = Array.from(e.target.files);
                        files.forEach(file => addImage(file));
                    }}
                    accept="image/*"
                    multiple
                    className="hidden"
                />

                <button
                    onClick={() => fileInputRef.current.click()}
                    disabled={uploading}
                    className="mb-4 px-4 py-2 bg-[#25A18E] text-white rounded-lg"
                >
                    {uploading ? 'Загрузка...' : 'Добавить изображения'}
                </button>

                <div className="flex flex-wrap gap-2 mb-6">
                    {content.images.map((img, index) => (
                        <div key={index} className="relative">
                            <img
                                src={img}
                                className="h-24 object-cover rounded-lg"
                                alt={`Изображение ${index}`}
                            />
                            <button
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePublish}
                    disabled={!content.title || !content.text}
                    className="w-full py-3 bg-[#25A18E] text-white rounded-lg"
                >
                    Опубликовать
                </button>
            </div>
        </div>
    );
};

export default ConstrPage;