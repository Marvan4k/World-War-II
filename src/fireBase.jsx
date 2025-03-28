import { initializeApp } from "firebase/app";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const initAuthPersistence = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
    } catch (error) {
        console.error("Ошибка настройки сохранения сессии:", error);
    }
};

// Инициализируем сразу
initAuthPersistence();

// Функция для проверки состояния аутентификации
const checkAuthState = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export { auth, checkAuthState };