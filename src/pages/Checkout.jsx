/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import PagoShopContext from '../context/PagoShopContext';
import requester from '../helpers/requester';
import formatNumberToPrice from '../helpers/formatNumber';
import './styles/Checkout.css';

function Checkout() {
  const [order, setOrder] = useState();
  const [clientName, setClientName] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { orderId } = useContext(PagoShopContext);

  const recoverOrder = async () => {
    const recoverUser = localStorage.getItem('user');
    const parsedUser = JSON.parse(recoverUser);

    const recoverToken = localStorage.getItem('token');
    const response = await requester('orders', 'getOne', {
      id: orderId,
      token: recoverToken,
    });

    const productPrices = response.productList.map((product) => {
      const price = product.actualUnitPrice * product.quantity;
      return price;
    });

    const newTotalPrice = productPrices.reduce((prev, crr) => prev + crr, 0);

    setOrder(response);
    setClientName(parsedUser.name);
    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    recoverOrder();
  }, []);

  return (
    <section className="checkout-section">
      <span className="back-home" onClick={() => navigate('/')}>{'<< Voltar para a Página Inicial'}</span>
      <h1>Finalizar Pedido</h1>
      <div className="order-info">
        <div className="delivery-info">
          <h2>Informações de Entrega</h2>
          {order && (
            <>
              <span>
                <b>Destinatário: </b>
                {clientName}
              </span>
              <span>
                <b>Rua: </b>
                {order.street}
              </span>
              <span>
                <b>Número: </b>
                {order.number}
              </span>
              <span>
                <b>CEP: </b>
                {order.cep}
              </span>
              <span>
                <b>Complemento: </b>
                {order.moreInfo}
              </span>
              <span>
                <b>Cidade: </b>
                {order.city}
              </span>
              <span>
                <b>Estado: </b>
                {order.state}
              </span>
            </>
          )}
        </div>
        <ul className="products-info">
          {order && order.productList.map((product) => {
            const { quantity, productName, actualUnitPrice: price } = product;
            return (
              <li key={uuid()}>{`${quantity} X - ${productName} [ ${price * quantity} ]`}</li>
            );
          })}
          <li>
            <b>Preço Total: </b>
            {`R$ ${formatNumberToPrice(totalPrice)}`}
          </li>
        </ul>
      </div>
      <div className="payment-info">
        <h2>Dados do Pagamento</h2>
        <form>
          <label htmlFor="cardNumber">
            <span>Número do Cartão:</span>
            <input
              type="text"
              id="cardNumber"
            />
          </label>
          <label htmlFor="cvv">
            <span>CVV:</span>
            <input
              type="text"
              id="cvv"
            />
          </label>
          <label htmlFor="expiration">
            <span>Data de Vencimento:</span>
            <input
              type="text"
              id="expiration"
            />
          </label>
          <label htmlFor="buyerName">
            <span>Nome do Titular:</span>
            <input
              type="text"
              id="buyerName"
            />
          </label>
        </form>
      </div>
      <button
        type="button"
      >
        FINALIZAR
      </button>
    </section>
  );
}

export default Checkout;
