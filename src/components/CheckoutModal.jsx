import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TrooperContext from '../context/TrooperContext';
import requester from '../helpers/requester';
import CheckoutConfirmation from './CheckoutConfirmation';
import './styles/CheckoutModal.css';

function CheckoutModal({ buyValue }) {
  const [checkoutInputs, setCheckoutInputs] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expirationMonth: '',
    expirationYear: '',
  });
  const [showCheckoutConfirmation, setShowCheckoutConfirmation] = useState(false);
  const { setShowCheckoutModal, orderId } = useContext(TrooperContext);

  const handleCheckoutInputChange = (event) => {
    const { id, value } = event.target;

    setCheckoutInputs({
      ...checkoutInputs,
      [id]: value,
    });
  };

  const handleFinishBuyClick = async () => {
    const payloadToConfirmOrder = {
      value: Number(buyValue
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.')),
      buyerName: checkoutInputs.name,
      cardNumber: checkoutInputs.cardNumber,
      cvv: checkoutInputs.cvv,
      expirationDate: `${checkoutInputs.expirationYear}-${checkoutInputs.expirationMonth}`,
    };

    const recoverToken = localStorage.getItem('token');

    const response = await requester('orders', 'postConfirmOrder', {
      id: orderId,
      payloadToConfirmOrder,
      token: recoverToken,
    });

    if (response === '') setShowCheckoutConfirmation(true);
  };

  const closeCheckoutModal = () => setShowCheckoutModal(false);

  return (
    <>
      {
        showCheckoutConfirmation
        && <CheckoutConfirmation setShowCheckoutConfirmationModal={setShowCheckoutConfirmation} />
      }
      <section className="checkout-modal">
        <div className="modal">
          <button
            type="button"
            className="close-checkout-modal"
            onClick={closeCheckoutModal}
          >
            X
          </button>
          <h2>Finalizar Compras</h2>
          <span className="value-info">
            Valor da Compra:
            {` R$ ${buyValue}`}
          </span>
          <form className="credit-card-checkout-info">
            <label htmlFor="name">
              <span>Nome do titular</span>
              <input
                type="text"
                id="name"
                value={checkoutInputs.name}
                onChange={handleCheckoutInputChange}
              />
            </label>
            <label htmlFor="cardNumber">
              <span>Número do cartão</span>
              <input
                type="text"
                id="cardNumber"
                value={checkoutInputs.cardNumber}
                onChange={handleCheckoutInputChange}
                maxLength={16}
              />
            </label>
            <label htmlFor="cvv">
              <span>Código de segurança</span>
              <input
                type="text"
                id="cvv"
                value={checkoutInputs.cvv}
                onChange={handleCheckoutInputChange}
                maxLength={4}
              />
            </label>
            <span>Validade do cartão</span>
            <div className="expiration-date">
              <label htmlFor="expirationMonth">
                <input
                  type="text"
                  id="expirationMonth"
                  value={checkoutInputs.expirationMonth}
                  onChange={handleCheckoutInputChange}
                  maxLength={2}
                />
              </label>
              <label htmlFor="expirationYear">
                <input
                  type="text"
                  id="expirationYear"
                  value={checkoutInputs.expirationYear}
                  onChange={handleCheckoutInputChange}
                  maxLength={4}
                />
              </label>
            </div>
          </form>
          <button
            type="button"
            onClick={handleFinishBuyClick}
          >
            Finalizar Compra
          </button>
        </div>
      </section>
    </>
  );
}

CheckoutModal.propTypes = {
  buyValue: PropTypes.number.isRequired,
};

export default CheckoutModal;
