import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
    query,
    where,
    orderBy,
    deleteDoc,
    doc
} from 'firebase/firestore';
import { db, auth } from '../fireBase';
import { setArticles, addArticle, removeArticle } from '../store/slices/articlesSlice';

const useContent = (initialState = {}) => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles);

    const defaultState = {
        title: '',
        text: '',
        images: [],
        ...initialState,
    };

    const [content, setContent] = useState(defaultState);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Объявляем resetContent перед использованием
    const resetContent = () => {
        setContent(defaultState);
    };

    // Загрузка статей
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                if (!auth.currentUser?.uid) {
                    setLoading(false);
                    return;
                }

                const q = query(
                    collection(db, 'articles'),
                    where('authorId', '==', auth.currentUser.uid),
                    orderBy('createdAt', 'desc')
                );

                const querySnapshot = await getDocs(q);
                const loadedArticles = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                dispatch(setArticles(loadedArticles));
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };

        const unsubscribe = auth.onAuthStateChanged(() => {
            fetchArticles();
        });

        return () => unsubscribe();
    }, [dispatch]);

    // Добавление изображения (base64)
    const addImage = async (file) => {
        try {
            setUploading(true);
            const reader = new FileReader();

            await new Promise((resolve, reject) => {
                reader.onload = () => resolve();
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            setContent(prev => ({
                ...prev,
                images: [...prev.images, reader.result]
            }));
        } catch (error) {
            console.error("Ошибка загрузки изображения:", error);
        } finally {
            setUploading(false);
        }
    };

    // Публикация статьи
    const publishArticle = async () => {
        if (!content.title || !content.text) {
            throw new Error("Заполните обязательные поля");
        }

        try {
            const newArticle = {
                title: content.title,
                text: content.text,
                images: content.images,
                createdAt: serverTimestamp(),
                authorId: auth.currentUser.uid,
            };

            const docRef = await addDoc(collection(db, 'articles'), newArticle);
            const savedArticle = { ...newArticle, id: docRef.id };

            dispatch(addArticle(savedArticle));
            resetContent(); // Теперь функция определена
            return savedArticle;
        } catch (error) {
            console.error("Ошибка публикации:", error);
            throw error;
        }
    };

    // Удаление статьи
    const deleteArticle = async (articleId) => {
        try {
            await deleteDoc(doc(db, 'articles', articleId));
            dispatch(removeArticle(articleId));
        } catch (error) {
            console.error("Ошибка удаления:", error);
            throw error;
        }
    };

    return {
        content,
        articles,
        loading,
        uploading,
        setTitle: (title) => setContent(prev => ({ ...prev, title })),
        setText: (text) => setContent(prev => ({ ...prev, text })),
        addImage,
        removeImage: (index) => setContent(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        })),
        resetContent, // Явно экспортируем функцию
        isEmpty: () => !content.title && !content.text,
        publishArticle,
        deleteArticle,
    };
};

export default useContent;