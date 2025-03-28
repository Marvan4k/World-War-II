import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [],
    reducers: {
        addArticle: (state, action) => {
            state.push({
                id: Date.now(),
                ...action.payload
            });
        }
    }
});

export const { addArticle } = articlesSlice.actions;
export default articlesSlice.reducer;