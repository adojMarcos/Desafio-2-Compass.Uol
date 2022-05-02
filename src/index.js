import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import App from './App';

const store = configureStore({reducer: UserReducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);


