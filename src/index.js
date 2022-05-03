import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import App from './App';
import { Provider } from 'react-redux';

const store = configureStore({reducer: UserReducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);


