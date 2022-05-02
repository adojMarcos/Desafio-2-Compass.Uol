import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import axios from './services/axios'
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/UserReducer'
import UserCard from './components/UserCard/UserCard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './Router';

function App() {  
  return (
    <Router />
    
  );
}

export default App;
