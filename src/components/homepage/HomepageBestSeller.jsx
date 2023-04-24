import React, { useEffect, useState, useContext } from 'react';
import TrooperContext from '../../context/TrooperContext';
import ProductCard from '../products/ProductCard';
import './styles/HomepageBestSeller.css';

function HomepageBestSeller() {
  const [products, setProducts] = useState([]);
  const { requestProducts } = useContext(TrooperContext);

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
        <ProductCard products={products} />
      </div>
    </section>
  );
}

export default HomepageBestSeller;
