import React, { useContext } from 'react';

import { CartContext } from '../components/App/App';

const Cart = () => {
  const [cart, , ,] = useContext(CartContext);

    return <section>{
   JSON.stringify(cart)    
    }</section>;
};

export default Cart;
