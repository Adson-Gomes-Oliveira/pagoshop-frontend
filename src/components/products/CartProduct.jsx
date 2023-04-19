import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import formatNumberToPrice from '../../helpers/formatNumber';
import PagoShopContext from '../../context/PagoShopContext';
import './styles/CartProduct.css';

function CartProduct({ info }) {
  const {
    id: productIdentificator,
    name,
    quantity,
    thumbnail,
    price,
  } = info;
  const navigate = useNavigate();
  const { cart, setCart } = useContext(PagoShopContext);

  const handleClickDelete = (id) => {
    const cartWithoutTheProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutTheProduct);
    navigate(0);
  };

  const handleAddOrSubtractItem = (event, productId) => {
    const { id } = event.target;

    if (id === 'subtract-item') {
      const newCart = cart;
      const actualProduct = newCart.findIndex((prod) => prod.id === productId);
      newCart[actualProduct].quantity -= 1;
      setCart([...newCart]);
    }

    if (id === 'add-item') {
      const newCart = cart;
      const actualProduct = newCart.findIndex((prod) => prod.id === productId);
      newCart[actualProduct].quantity += 1;
      setCart([...newCart]);
    }
  };

  return (
    <div key={uuid()} className="cart-product">
      <div className="product-general-info">
        <div className="info-body">
          <img src={thumbnail} alt={name} />
          <div className="product-info">
            <span>{`${name.slice(0, 32)}...`}</span>
            <span>{`R$ ${price}`}</span>
          </div>
        </div>
        <div className="info-quantity-control">
          <div className="control-buttons">
            <button
              type="button"
              id="subtract-item"
              onClick={(e) => handleAddOrSubtractItem(e, productIdentificator)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              id="add-item"
              onClick={(e) => handleAddOrSubtractItem(e, productIdentificator)}
            >
              +
            </button>
          </div>
          <span>{`R$ ${formatNumberToPrice(quantity * price)}`}</span>
          <button
            className="button-delete"
            type="button"
            onClick={() => handleClickDelete(info.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default CartProduct;
