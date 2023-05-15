import React from 'react';

import Card from '../Card/Card';


import './Category.scss';

const Category = ({ name, items }) => {
  return (
    <section className="category">
      <h2 className="h2 category__name">{name}</h2>
      <div className="cards">
        {items.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Category;
