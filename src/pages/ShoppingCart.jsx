/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from '../components/products/CartProduct';
import PagoShopContext from '../context/PagoShopContext';
import formatNumberToPrice from '../helpers/formatNumber';
import requester from '../helpers/requester';
import MainHeader from '../components/header/MainHeader';
import './styles/ShoppingCart.css';

function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { cart, setOrderId } = useContext(PagoShopContext);

  useEffect(() => {
    const prices = cart.map((product) => {
      const finalPricePerProduct = product.price * product.quantity;
      return finalPricePerProduct;
    });

    const finalPrice = prices.reduce((prev, crr) => crr + prev, 0);
    setTotalPrice(finalPrice);
  }, [cart]);

  const handleClickContinue = async () => {
    const recoverUser = localStorage.getItem('user');
    const recoverToken = localStorage.getItem('token');
    const parsedUser = JSON.parse(recoverUser);
    const responseUser = await requester('accounts', 'getOne', {
      id: parsedUser.userId,
      token: recoverToken,
    });

    const cartWithNoDiscount = cart.map((product) => ({
      productId: product.id,
      productName: product.product,
      quantity: product.quantity,
      discount: 0,
      actualUnitPrice: product.unitPrice,
    }));

    const newOrder = {
      clientId: parsedUser.userId,
      street: responseUser.address.street,
      number: responseUser.address.number,
      moreInfo: responseUser.address.more_info,
      cep: responseUser.address.cep,
      city: responseUser.address.city,
      state: responseUser.address.state,
      productList: [...cartWithNoDiscount],
    };

    const responseOrder = await requester('orders', 'post', {
      orderInfos: newOrder,
      token: recoverToken,
    });

    setOrderId(responseOrder.id);
    navigate('/checkout');
  };

  return (
    <section className="shopping-cart-section">
      <MainHeader />
      <div className="shoping-cart-body">
        <div className="cart-products">
          <h2>Meu carrinho</h2>
          {cart.length > 0 ? (
            <div className="cart-list">
              {cart.map((product) => <CartProduct info={product} />)}
            </div>
          ) : <span>Não há produtos no carrinho</span>}
        </div>
        <div className="final-price">
          <h2>Resumo do Pedido</h2>
          <div className="subtotal-price">
            <span>Subtotal</span>
            <span>{cart.length > 0 ? `R$ ${formatNumberToPrice(totalPrice)}` : 'R$ 0,00'}</span>
          </div>
          <div className="delivery-price">
            <button type="button">
              Estimativa de frete
            </button>
          </div>
          <div className="total-price">
            <span>Total</span>
            <span>{cart.length > 0 ? `R$ ${formatNumberToPrice(totalPrice)}` : 'R$ 0,00'}</span>
          </div>
          <div className="checkout-price">
            <button
              type="button"
              onClick={handleClickContinue}
            >
              Checkout
            </button>
            <div className="checkout-disclaimer">
              <span className="material-icons-outlined">
                lock
              </span>
              <span>Checkout seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
