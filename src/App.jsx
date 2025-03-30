<<<<<<< Updated upstream
=======
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setUser, removeUser } from './store/slices/userSlice';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import { checkAuthState } from './fireBase';
import Consruct from "./Pages/Consruct";

>>>>>>> Stashed changes
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = checkAuthState((user) => {
            if (user) {
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    emailVerified: user.emailVerified
                }));
            } else {
                dispatch(removeUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);
  return (
<<<<<<< Updated upstream
    <div className="App">
      <p className="text-8xl text-red-700 text-center">Привет, Виталя! Мы тут сайт делаем!</p>
    </div>
=======
    <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/constr" element={<Consruct />} />
    </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
