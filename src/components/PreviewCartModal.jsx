import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import PagoShopContext from '../context/PagoShopContext';
import formatNumberToPrice from '../helpers/formatNumber';
import './styles/PreviewCartModal.css';

function PreviewCartModal() {
  const navigate = useNavigate();
  const {
    showPreviewCartModal,
    setShowPreviewCartModal,
    cart,
    setCart,
    totalPrice,
  } = useContext(PagoShopContext);

  const handlePreviewCartCloseClick = () => setShowPreviewCartModal(false);

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

  const handleClickShoppingCart = () => {
    setShowPreviewCartModal(false);
    navigate('/shopping-cart');
  };

  if (showPreviewCartModal) {
    return (
      <section className="preview-card-modal">
        <div className="modal-header">
          <button
            type="button"
            onClick={handlePreviewCartCloseClick}
          >
            <span className="material-icons-outlined">keyboard_arrow_right</span>
          </button>
          <span>Carrinho</span>
        </div>
        <div className="modal-products">
          {cart && cart.map((prod) => {
            const {
              name,
              thumbnail,
              price,
              quantity,
            } = prod;

            return (
              <>
                <div className="modal-products-item" key={uuid()}>
                  <img src={thumbnail} alt={name} />
                  <div className="item-infos">
                    <span>{name}</span>
                    <span className="item-price">{formatNumberToPrice.format(price)}</span>
                    <div className="info-quantity-control">
                      <button
                        type="button"
                        id="subtract-item"
                        onClick={(e) => handleAddOrSubtractItem(e, prod.id)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        id="add-item"
                        onClick={(e) => handleAddOrSubtractItem(e, prod.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="divisor" />
              </>
            );
          })}
        </div>
        <div className="modal-price">
          <span>Subtotal</span>
          <span>{`R$ ${totalPrice()}`}</span>
        </div>
        <div className="divisor" />
        <button
          className="cart-details-button"
          type="button"
          onClick={handleClickShoppingCart}
        >
          Ver carrinho
        </button>
      </section>
    );
  }
}

export default PreviewCartModal;
