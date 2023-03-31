import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatNumberToPrice from '../../helpers/formatNumber';
import '../styles/Products.css';

const NO_IMG_URL = 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg';

function ProductCard({ info }) {
  const {
    _id,
    product,
    thumbnail,
    unit_price: unitPrice,
  } = info;

  return (
    <div key={uuid()} className="product-card">
      <Link to={`/products/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <span className="title">{product}</span>
        <img src={thumbnail || NO_IMG_URL} alt={product} />
        <div className="price">
          <span>À Vista ou no Cartão de Crédito</span>
          <span>Até 12 X sem juros</span>
          <span>{`R$ ${formatNumberToPrice(unitPrice)}`}</span>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default ProductCard;
