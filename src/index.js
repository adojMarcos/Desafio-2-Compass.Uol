import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './components/Repos/Repos'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import { Provider } from 'react-redux';
import Starred from './components/Starred/Starred';

const store = configureStore({reducer: UserReducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="repos" element={<Repos />} />
          <Route path="starred" element={<Starred />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
    
  </React.StrictMode>
);


