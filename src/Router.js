import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './components/Repos/Repos'
import Starred from './components/Starred/Starred';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Followers from './components/Followers/Followers';
import Following from './components/Following/Following';


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="repos" element={<Repos />} />
                  <Route path="starred" element={<Starred />} />
                  <Route path="followers" element={<Followers />} />
                  <Route path="following" element={<Following /> } />
            </Routes>   
      <Footer />
    </BrowserRouter>
  )
}

export default Router