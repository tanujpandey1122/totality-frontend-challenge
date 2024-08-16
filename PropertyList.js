import React, { useState } from 'react';
import PropertyItem from './PropertyItem';
import PropertyFilter from './PropertyFilter';

const propertiesData = [
  { id: 1, title: 'Luxury Villa', location: 'Malibu', price: 500, bedrooms: 3, amenities: ['Pool', 'WiFi'] },
  { id: 2, title: 'Cozy Cottage', location: 'Aspen', price: 300, bedrooms: 2, amenities: ['Fireplace', 'WiFi'] },
  // Add more properties here
];

function PropertyList({ addToCart }) {
  const [properties, setProperties] = useState(propertiesData);

  const applyFilter = (filter) => {
    // Filter logic based on filter criteria
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <PropertyFilter applyFilter={applyFilter} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyItem key={property.id} property={property} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
