import {configureStore} from "@reduxjs/toolkit";
import articlesReducer from './slices/articlesSlice';
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        articles: articlesReducer
    }
})