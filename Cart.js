import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart({ cart, updateCart }) {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <h2>Total: ${cartTotal}</h2>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
