import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

function ProductCard({ info }) {
  const {
    name,
    description,
    slug,
    unitPrice,
  } = info;

  return (
    <div key={uuid()} className="product-card">
      <span>{name}</span>
      <span>{description}</span>
      <span>{slug}</span>
      <span>{unitPrice}</span>
    </div>
  );
}

ProductCard.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default ProductCard;
