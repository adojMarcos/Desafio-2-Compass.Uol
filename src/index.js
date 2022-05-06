import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import ReposReducer from './reducer/ReposReducer';
import App from './App';
import { Provider } from 'react-redux';
import LoadingReducer from './reducer/LoadingReducer';
import FollowersSlice from './reducer/FollowersReducer'

const reducer = {
  user: UserReducer,
  repos: ReposReducer,
  load: LoadingReducer,
  followers: FollowersSlice
}

const store = configureStore({reducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);


