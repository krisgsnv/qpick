import React from 'react';

import Card from '../Card/Card';


import './Category.scss';

const Category = ({ name, products }) => {
  return (
    <section className="category">
      <h2 className="h2 category__name">{name}</h2>
      <div className="cards">
        {products.map((product) => (
          <Card {...product} />
        ))}
      </div>
    </section>
  );
};

export default Category;
