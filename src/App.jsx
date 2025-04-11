import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setUser, removeUser } from './store/slices/userSlice';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import { checkAuthState } from './fireBase';
import Consruct from "./Pages/Consruct";
import Working from "./Pages/atWorking";

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
    <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/constr" element={<Consruct />} />
        <Route exact path="/work" element={<Working />} />
    </Routes>
  );
}

export default App;