import React from 'react';

function Summary({ cart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Booking Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>${item.price} per night</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
}

export default Summary;
