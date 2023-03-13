import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import requester from '../../helpers/requester';
import MainHeader from '../header/MainHeader';
import formatNumberToPrice from '../../helpers/formatNumber';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const requestProduct = async () => {
    const response = await requester('products', 'getOne', id);
    setProduct(response);
  };

  useEffect(() => {
    requestProduct();
  }, []);

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
              <button type="button">Comprar</button>
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
