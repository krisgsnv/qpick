import React, { useContext } from 'react';
import { CartContext } from '../App/App';

import './CartTotal.scss';

const CartTotal = () => {
  const [cart, , ,] = useContext(CartContext);
  const cartSum = cart.reduce((acc, curr) => acc + curr.priceTotal, 0).toLocaleString();

  return (
    <div className="cart-total">
      <div className="cart-total__heading">
        <span>ИТОГО</span>
        <span>₽ {cartSum}</span>
      </div>
      <button type="button" className="cart-total__btn">
        Перейти к оформлению
      </button>
    </div>
  );
};

export default CartTotal;
