/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from '../components/products/CartProduct';
import formatNumberToPrice from '../helpers/formatNumber';
import './styles/ShoppingCart.css';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const recoverCart = localStorage.getItem('shopping-cart');
    if (recoverCart) {
      const cartParsed = JSON.parse(recoverCart);
      return setCart(cartParsed);
    }

    return undefined;
  }, []);

  useEffect(() => {
    const prices = cart.map((product) => {
      const finalPricePerProduct = product.unitPrice * product.quantity;
      return finalPricePerProduct;
    });

    const finalPrice = prices.reduce((prev, crr) => crr + prev, 0);
    setTotalPrice(finalPrice);
  }, [cart]);

  return (
    <section className="shopping-cart-section">
      <span className="back-home" onClick={() => navigate('/')}>{'<< Voltar para a Página Inicial'}</span>
      <h1>Carrinho de Compras</h1>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((product) => <CartProduct info={product} />)}
        </div>
      ) : <span>Não há produtos no carrinho</span>}
      <div className="final-price">
        <span>
          <b>PREÇO TOTAL: </b>
          {cart.length > 0 ? `R$ ${formatNumberToPrice(totalPrice)}` : 'R$ 0,00'}
        </span>
      </div>
      <button
        type="button"
      >
        CONTINUAR
      </button>
    </section>
  );
}

export default ShoppingCart;
