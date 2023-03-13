import React, { useEffect, useContext, useState } from 'react';
import PagoShopContext from '../../context/PagoShopContext';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const { requestProducts } = useContext(PagoShopContext);

  useEffect(() => {
    const response = async () => {
      const responseProducts = await requestProducts();
      setProducts(responseProducts);
    };

    response();
  }, []);

  return (
    <section className="products-section">
      {products.map((product) => <ProductCard info={product} />)}
    </section>
  );
}

export default Products;
