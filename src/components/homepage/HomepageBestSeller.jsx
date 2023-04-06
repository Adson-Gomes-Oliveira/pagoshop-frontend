import React, { useEffect, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import PagoShopContext from '../../context/PagoShopContext';
import formatNumberToPrice from '../../helpers/formatNumber';
import '../styles/HomepageBestSeller.css';

function HomepageBestSeller() {
  const [products, setProducts] = useState([]);
  const { requestProducts } = useContext(PagoShopContext);

  const fetchProducts = async () => {
    const getProducts = await requestProducts();
    const firstSixProducts = getProducts.slice(0, 5);

    setProducts(firstSixProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="homepage-best-seller">
      <h2>Mais vendidos</h2>
      <div className="best-seller-cards">
        {products && products.map((product) => {
          const { product: name, unitPrice, thumbnail } = product;

          return (
            <div className="product-card" key={uuid()}>
              <div className="card-thumbnail" style={{ backgroundImage: `url(${thumbnail})` }}>
                <div><span>Mais vendidos</span></div>
              </div>
              <div className="card-info">
                <span>{name}</span>
                <span>{`R$ ${formatNumberToPrice(unitPrice)}`}</span>
                <button type="button">Adicionar ao carrinho</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomepageBestSeller;
