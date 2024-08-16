import React from 'react';

function PropertyItem({ property, addToCart }) {
  return (
    <div className="property-item">
      <h2>{property.title}</h2>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price} per night</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Amenities: {property.amenities.join(', ')}</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
}

export default PropertyItem;
