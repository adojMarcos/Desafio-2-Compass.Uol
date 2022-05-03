import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Repos from './components/Repos/Repos'
import Starred from './components/Starred/Starred';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="repos" element={<Repos />} />
                <Route path="starred" element={<Starred />} />
          </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router