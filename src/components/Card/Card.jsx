import React, { useContext } from 'react';

import { CartContext } from '../App/App';

import './Card.scss';

const Card = (product) => {
  const { id, img, title, price, oldPrice, rating } = product;
  const [cart, setCart, increaseProductCount] = useContext(CartContext);

  const inCart = () => {
    let res = false;
    cart.forEach((product) => {
      if (product.id === id) {
        res = true;
      }
    });
    return res;
  };

  const addToCart = () => {
    inCart() ? increaseProductCount(id)
    : setCart(() => [...cart, { ...product, count: 1, priceTotal: product.price }]);
  };

  return (
    <div className="card">
      <img src={`./assets/img/${img}`} alt={title} className="card__img" />
      <div className="card__row card__row_title">
        <h3 className="h3 card__title">{title}</h3>
        <div>
          <span className="card__price">{price} ₽</span>
          {oldPrice && <span className="card__price card__price_discount">{oldPrice} ₽</span>}
        </div>
      </div>
      <div className="card__row">
        <div className="card__rating">
          <svg
            className="card__star"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none">
            <path
              d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z"
              fill="#FFCE7F"
            />
          </svg>
          {rating}
        </div>
        <button className="card__btn" type="button" onClick={addToCart}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
