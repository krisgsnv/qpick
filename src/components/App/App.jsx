import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

import './App.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
