import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <h1>Welcome to the Property Rental Platform!</h1>
        <Routes>
          <Route path="/" element={<PropertyList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
