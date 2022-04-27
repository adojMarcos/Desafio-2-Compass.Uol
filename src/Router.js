import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './components/Repos/Repos'
import Starred from './components/Starred/Starred';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="repos" element={<Repos />} />
          <Route path="starred" element={<Starred />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router