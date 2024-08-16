import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Summary from './Summary';

function Checkout({ cart }) {
  const [bookingDetails, setBookingDetails] = useState({ name: '', email: '', payment: '' });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Summary cart={cart} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={bookingDetails.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={bookingDetails.email} onChange={handleChange} required />
        <input type="text" name="payment" placeholder="Payment Details" value={bookingDetails.payment} onChange={handleChange} required />
        <button type="submit">Confirm Booking</button>
      </form>
      <Link to="/cart">
        <button>Go Back to Cart</button>
      </Link>
    </div>
  );
}

export default Checkout;
