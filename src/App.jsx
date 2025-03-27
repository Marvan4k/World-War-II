import React from 'react';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Main />} />
    </Routes>
  );
}

export default App;