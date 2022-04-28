import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import { Provider } from 'react-redux';
import Footer from './components/Footer/Footer';

const store = configureStore({reducer: UserReducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>HEADER</h1>
        <Router />
      <Footer />
    </Provider>
    
    
  </React.StrictMode>
);


