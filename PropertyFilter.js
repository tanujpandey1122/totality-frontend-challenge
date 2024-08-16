import React, { useState } from 'react';

function PropertyFilter({ applyFilter }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [bedrooms, setBedrooms] = useState(1);

  const handleFilter = () => {
    applyFilter({ location, priceRange, bedrooms });
  };

  return (
    <div className="property-filter">
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="range" min="0" max="1000" value={priceRange[1]} onChange={(e) => setPriceRange([0, e.target.value])} />
      <input type="number" min="1" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
}

export default PropertyFilter;
