import React, { useContext } from 'react';

import CartItems from '../components/CartItems/CartItems';
import CartTotal from '../components/CartTotal/CartTotal';
import { CartContext } from '../components/App/App';

const Cart = () => {
  const [cart, , ,] = useContext(CartContext);
  
  return (
    <section className="cart">
      <h1 className="cart__title h1">Корзина</h1>
      {cart.length ? (
        <div className="cart-content">
          <CartItems />
          <CartTotal />
        </div>
      ) : (
        <p>Ваша корзина пуста.</p>
      )}
    </section>
  );
};

export default Cart;
