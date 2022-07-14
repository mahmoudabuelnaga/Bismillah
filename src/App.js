import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import QuranImage from './pages/QuranImage';
import Header from './components/Header';
import NoPage from './pages/Page404';
import Categorios from './categories/Categories';
import { Outlet } from "react-router-dom";
import Container from './categories/Container';
import Component from './categories/Component';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/quran' element={<QuranImage />} />
            <Route path='/categories' element={<Categorios />} />
              {/* <Route index element={<Home />} /> */}
            <Route path="/categories/:id/:slug" element={<Container />} />
            <Route path="/categories/container/component/:id" element={<Component />} />
              {/* <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            {/* </Route> */}

            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Outlet />
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
