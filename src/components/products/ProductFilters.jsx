import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import './styles/ProductFilters.css';

function ProductFilters({
  category,
  setProductsToDefault,
  setFilterCategory,
}) {
  const [expandFilter, setExpandFilter] = useState('none');

  const handleExpandFilterClick = () => {
    if (expandFilter === 'none') return setExpandFilter('flex');
    if (expandFilter === 'flex') return setExpandFilter('none');
    return null;
  };

  const handleSetFilterCategory = (cat) => setFilterCategory(cat);

  return (
    <div className="product-filters">
      <h3>Filtrar por</h3>
      <div className="divisor" />
      <div className="filters">
        <div className="filters-header">
          <span>Categoria</span>
          <button
            type="button"
            onClick={handleExpandFilterClick}
          >
            { expandFilter === 'none' ? '+' : '-'}
          </button>
        </div>
        <ul style={{ display: expandFilter, flexDirection: 'column' }}>
          <li key={uuid()}>
            <button
              type="button"
              onClick={setProductsToDefault}
            >
              Geral
            </button>
          </li>
          {Object.keys(category).length > 0 && category.subCategories.map((cat) => (
            <li key={uuid()}>
              <button
                type="button"
                onClick={() => handleSetFilterCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="divisor" />
    </div>
  );
}

ProductFilters.propTypes = {
  category: PropTypes.shape.isRequired,
  setProductsToDefault: PropTypes.func.isRequired,
  setFilterCategory: PropTypes.func.isRequired,
};

export default ProductFilters;
