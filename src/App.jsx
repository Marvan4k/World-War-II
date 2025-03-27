import React from 'react';
import Test from './components/Test.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
