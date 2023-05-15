import React, { useContext } from 'react';
import { CartContext } from '../App/App';

import CartItem from '../CartItem/CartItem';

import './CartItems.scss';

const CartItems = () => {
  const [cart, , ,] = useContext(CartContext);

  return (
    <div className="cart-items">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartItems;
