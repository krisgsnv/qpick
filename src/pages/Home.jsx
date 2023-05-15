import React from 'react';

import Category from '../components/Category/Category';
import { products } from '../products.js';

const Home = () => {
  return (
    <>
      {products.map(({ categoryId, categoryName, items }) => (
        <Category key={categoryId} name={categoryName} items={items} />
      ))}
    </>
  );
};

export default Home;
