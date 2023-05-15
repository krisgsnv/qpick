import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

import './App.scss';

export const CartContext = createContext([]);

const App = () => {
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

  const increaseProductCount = (id) => {
    return cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
          priceTotal: (product.count + 1) * product.price,
        };
      }
      return product;
    });
  };

  useEffect(() => sessionStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  
  return (
    <CartContext.Provider value={[cart, setCart, increaseProductCount]}>
      <div className="container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
