import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './styles/ProductShowCase.css';

function ProductShowCase({ productsFiltered }) {
  return (
    <div className="product-show-case">
      <select style={{ display: 'none' }}>
        <option value="selectBy">Selecionar por</option>
        <option value="price-lower-to-higher">Preço (menor ao maior)</option>
        <option value="price-higher-to-lower">Preço (maior ao menor)</option>
        <option value="a-z">Nome A-Z</option>
        <option value="z-a">Nome Z-A</option>
      </select>
      <div className="cards">
        <ProductCard products={productsFiltered} />
      </div>
    </div>
  );
}

ProductShowCase.propTypes = {
  productsFiltered: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProductShowCase;
