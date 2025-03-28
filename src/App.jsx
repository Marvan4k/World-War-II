import React from 'react';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Consruct from "./Pages/Consruct";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/constr" element={<Consruct />} />
    </Routes>
  );
}

export default App;