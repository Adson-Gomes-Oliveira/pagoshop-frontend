import React, { useEffect, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useParams } from 'react-router-dom';
import PagoShopContext from '../context/PagoShopContext';
import requester from '../helpers/requester';
import ProductCard from '../components/products/ProductCard';
import MainHeader from '../components/header/MainHeader';
import Footer from '../components/Footer';
import './styles/ProductsByCategory.css';

function ProductsByCategory() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [category, setCategory] = useState({});
  const [expandFilter, setExpandFilter] = useState('none');
  const [filterCategory, setFilterCategory] = useState('');
  const { requestProducts } = useContext(PagoShopContext);
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

  const handleExpandFilterClick = () => {
    if (expandFilter === 'none') return setExpandFilter('flex');
    if (expandFilter === 'flex') return setExpandFilter('none');
    return null;
  };

  return (
    <>
      <section className="products-by-category">
        <MainHeader />
        <h2>{`Comprar ${category.name || ''}`}</h2>
        <div className="products">
          <div className="product-filters">
            <h3>Filtrar por</h3>
            <div className="divisor" />
            <div className="filters">
              <div className="filters-header">
                <span>Categoria</span>
                <button
                  type="button"
                  onClick={handleExpandFilterClick}
                >
                  { expandFilter === 'none' ? '+' : '-'}
                </button>
              </div>
              <ul style={{ display: expandFilter, flexDirection: 'column' }}>
                <li key={uuid()}>
                  <button
                    type="button"
                    onClick={() => setProductsFiltered(products)}
                  >
                    Geral
                  </button>
                </li>
                {Object.keys(category).length > 0 && category.subCategories.map((cat) => (
                  <li key={uuid()}>
                    <button
                      type="button"
                      onClick={() => setFilterCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="divisor" />
          </div>
          <div className="product-cards">
            <select style={{ display: 'none' }}>
              <option value="selectBy">Selecionar por</option>
              <option value="price-lower-to-higher">Preço (menor ao maior)</option>
              <option value="price-higher-to-lower">Preço (maior ao menor)</option>
              <option value="a-z">Nome A-Z</option>
              <option value="z-a">Nome Z-A</option>
            </select>
            <div className="cards">
              <ProductCard products={productsFiltered} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductsByCategory;
