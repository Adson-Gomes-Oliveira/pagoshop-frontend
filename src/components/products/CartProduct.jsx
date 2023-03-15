import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import formatNumberToPrice from '../../helpers/formatNumber';
import '../styles/CartProduct.css';

function CartProduct({ info }) {
  const {
    product,
    quantity,
    thumbnail,
    unitPrice,
  } = info;
  const navigate = useNavigate();

  const handleClickDelete = (id) => {
    const recoverCart = JSON.parse(localStorage.getItem('shopping-cart'));
    const cartWithoutTheProduct = recoverCart.filter((prod) => prod.id !== id);
    localStorage.setItem('shopping-cart', JSON.stringify(cartWithoutTheProduct));
    navigate(0);
  };

  return (
    <div key={uuid()} className="cart-product">
      <button
        className="button-delete"
        type="button"
        onClick={() => handleClickDelete(info.id)}
      >
        <span className="material-icons-outlined">delete</span>
      </button>
      <div className="product-general-info">
        <img src={thumbnail} alt={product} />
        <div className="product-info">
          <span>
            <b>Quantidade: </b>
            {quantity}
          </span>
          <span>
            <b>Preço: </b>
            {`R$ ${formatNumberToPrice(unitPrice * quantity)}`}
          </span>
        </div>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default CartProduct;
