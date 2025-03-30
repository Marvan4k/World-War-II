import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< Updated upstream
=======
import {Provider} from "react-redux";
import {store} from "store";
import './fireBase';


>>>>>>> Stashed changes
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
