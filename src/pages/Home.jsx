import React from 'react';

import Category from '../components/Category/Category';
import { products } from '../products.js';

const Home = () => {
  return (
    <>
      {products.map(({ categoryName, items }) => (
        <Category name={categoryName} products={items} />
      ))}
    </>
  );
};

export default Home;
