import React from 'react';

import './CartItem.scss';

const CartItem = (product) => {
  const { id, img, title, price, count, priceTotal } = product;

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img src={`./assets/img/${img}`} alt={title} className="cart-item__img" />
        <div className="cart-item__counter">
          <button type="button" className="cart-item__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none">
              <path
                d="M7.08375 6V0H9.42819V6H16.4615V8H9.42819V14H7.08375V8H0.050415V6H7.08375Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="cart-item__counter-value">{count}</span>
          <button type="button" className="cart-item__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none">
              <path d="M0.788879 0H17.2V2H0.788879V0Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div className="cart-item__right">
        <button type="button" title="Удалить" className="cart-item__remove">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none">
            <path
              d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"
              fill="#DF6464"
            />
          </svg>
        </button>
        <h3 className="cart-item__title">{title}</h3>
        <span className="cart-item__price">{price.toLocaleString()} ₽</span>
        <span className="cart-item__sum">{priceTotal.toLocaleString()} ₽</span>
      </div>
    </div>
  );
};

export default CartItem;
