// hooks/useContent.js
import { useState } from 'react';

const useContent = (initialState = {}) => {
    // Начальные значения
    const defaultState = {
        title: '',
        text: '',
        images: [],
        ...initialState, // Можно переопределить начальные значения
    };

    const [content, setContent] = useState(defaultState);

    // Обновление заголовка
    const setTitle = (title) => {
        setContent(prev => ({ ...prev, title }));
    };

    // Обновление основного текста
    const setText = (text) => {
        setContent(prev => ({ ...prev, text }));
    };

    // Добавление изображений (URL или File)
    const addImage = (image) => {
        setContent(prev => ({ ...prev, images: [...prev.images, image] }));
    };

    // Удаление изображения по индексу
    const removeImage = (index) => {
        setContent(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    // Сброс всего контента
    const resetContent = () => {
        setContent(defaultState);
    };

    // Проверка на пустоту
    const isEmpty = () => {
        return !content.title && !content.text && content.images.length === 0;
    };

    return {
        content,
        setTitle,
        setText,
        addImage,
        removeImage,
        resetContent,
        isEmpty,
    };
};

export default useContent;