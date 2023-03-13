import React, { useEffect, useContext, useState } from 'react';
import PagoShopContext from '../../context/PagoShopContext';
import ProductCard from './ProductCard';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const { requestProducts, filterCategory } = useContext(PagoShopContext);

  useEffect(() => {
    const response = async () => {
      const responseProducts = await requestProducts();
      setProducts(responseProducts);
    };

    response();
  }, []);

  return (
    <section className="products-section">
      {products.map((product) => {
        if (filterCategory === '') {
          return (<ProductCard info={product} />);
        }

        if (product.category === filterCategory) {
          return (<ProductCard info={product} />);
        }

        return null;
      })}
    </section>
  );
}

export default Products;
