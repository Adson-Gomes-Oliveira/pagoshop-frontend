import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import TrooperContext from '../context/TrooperContext';
import MainHeader from '../components/header/MainHeader';
import ProductFilters from '../components/products/ProductFilters';
import ProductShowCase from '../components/products/ProductShowCase';
import requester from '../helpers/requester';
import Footer from '../components/Footer';
import './styles/ProductsByCategory.css';

function ProductsByCategory() {
  const { requestProducts } = useContext(TrooperContext);
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const [category, setCategory] = useState({});
  const [filterCategory, setFilterCategory] = useState('');
  const { id } = useParams();

  const requestProductsAndFilterByCategory = async () => {
    const responseProducts = await requestProducts();
    const responseCategory = await requester('categories', 'getOne', { id });
    const filterByCategory = responseProducts.filter((prod) => prod.category === id);

    setProducts(filterByCategory);
    setProductsFiltered(filterByCategory);
    setCategory(responseCategory);
  };

  useEffect(() => {
    requestProductsAndFilterByCategory();
  }, []);

  useEffect(() => {
    const productsByFilter = products.filter((prod) => prod.subCategory[0] === filterCategory);
    setProductsFiltered(productsByFilter);
  }, [filterCategory]);

  const setProductsToDefault = () => {
    setProductsFiltered(products);
  };

  return (
    <>
      <section className="products-by-category">
        <MainHeader />
        <h2>{`Comprar ${category.name || ''}`}</h2>
        <div className="products">
          <ProductFilters
            category={category}
            setProductsToDefault={setProductsToDefault}
            setFilterCategory={setFilterCategory}
          />

          <ProductShowCase
            productsFiltered={productsFiltered}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductsByCategory;
