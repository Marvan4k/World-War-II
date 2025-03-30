import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        setArticles: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        addArticle: (state, action) => {
            state.items = [action.payload, ...state.items];
        },
        removeArticle: (state, action) => {
            state.items = state.items.filter(article => article.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

// Экспортируем actions
export const { setArticles, addArticle, removeArticle, setLoading, setError } = articlesSlice.actions;

// Асинхронный action для загрузки статей
export const fetchArticles = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articles = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch(setArticles(articles));
    } catch (error) {
        dispatch(setError(error.message));
        console.error("Ошибка загрузки статей:", error);
    }
};

export default articlesSlice.reducer;