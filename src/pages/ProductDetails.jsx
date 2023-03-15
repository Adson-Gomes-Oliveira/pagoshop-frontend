import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import requester from '../helpers/requester';
import MainHeader from '../components/header/MainHeader';
import formatNumberToPrice from '../helpers/formatNumber';
import './styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const requestProduct = async () => {
    const response = await requester('products', 'getOne', id);
    setProduct(response);
  };

  useEffect(() => {
    requestProduct();
  }, []);

  const handleClickBuy = () => {
    if (!localStorage.getItem('user')) return navigate('/login');
    if (localStorage.getItem('shopping-cart')) {
      const recoverCart = JSON.parse(localStorage.getItem('shopping-cart'));

      const productExistsInCartIndex = recoverCart
        .findIndex((productInCart) => productInCart.product === product.product);
      if (productExistsInCartIndex > -1) {
        recoverCart[productExistsInCartIndex].quantity += 1;
        return localStorage.setItem('shopping-cart', JSON.stringify(recoverCart));
      }

      return localStorage.setItem('shopping-cart', JSON.stringify([
        ...recoverCart,
        {
          id: product._id,
          product: product.product,
          unitPrice: product.unit_price,
          thumbnail: product.thumbnail,
          quantity: 1,
        },
      ]));
    }

    return localStorage.setItem('shopping-cart', JSON.stringify([
      {
        id: product._id,
        product: product.product,
        unitPrice: product.unit_price,
        thumbnail: product.thumbnail,
        quantity: 1,
      },
    ]));
  };

  return (
    <>
      <MainHeader />
      <section className="product-details-section">
        {product !== null ? (
          <>
            <div className="product-image">
              <h2>{product.product}</h2>
              <img src={product.thumbnail} alt={product.name} />
              <span>{product.slug}</span>
            </div>
            <div className="product-buy">
              <span>{`R$ ${formatNumberToPrice(product.unit_price)}`}</span>
              <span>Pode dividir em até 12X sem juros !</span>
              <span>Aceitamos todos os cartões.</span>
              <span>Frete grátis todo Brasil *</span>
              <button
                type="button"
                onClick={handleClickBuy}
              >
                Comprar
              </button>
            </div>
          </>
        ) : <span>ERRO404</span>}
      </section>
      {product !== null ? (
        <div className="product-details-description">
          <h3>DESCRIÇÃO DO PRODUTO</h3>
          <p>{product.description}</p>
        </div>
      ) : <span>ERRO404</span>}
    </>
  );
}

export default ProductDetails;
