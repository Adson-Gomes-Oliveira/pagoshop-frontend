/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuCategories from './MenuCategories';
import requester from '../../helpers/requester';
import PagoShopContext from '../../context/PagoShopContext';
import '../styles/MainNav.css';

function MainNav() {
  const [categories, setCategories] = useState([]);
  const [fixedCategories, setFixedCategories] = useState([]);
  const [displayCategories, setDisplayCategories] = useState('none');
  const { setFilterCategory } = useContext(PagoShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  const requestCategories = async () => {
    const categoriesResponse = await requester('categories', 'get');
    const firstCategories = categoriesResponse.slice(0, 5);

    setFixedCategories(firstCategories);

    const categoriesFiltered = categoriesResponse.filter((cat) => {
      const categoryNames = firstCategories.map((firstCat) => firstCat.name);
      if (!categoryNames.includes(cat.name)) return cat;
      return null;
    });

    const activeCategories = categoriesFiltered.filter((cat) => cat.status === 'active');
    setCategories(activeCategories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  const toggleMenuCategories = () => {
    const newCategoriesDisplayStatus = displayCategories === 'none' ? 'flex' : 'none';
    setDisplayCategories(newCategoriesDisplayStatus);
  };

  const handleClickCategory = (event) => {
    const { id } = event.target;
    setFilterCategory(id);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <>
      <section className="main-nav">
        <button
          type="button"
          className="all-categories"
          onClick={toggleMenuCategories}
        >
          <span>Todas as Categorias</span>
          <span className="material-icons-outlined">keyboard_double_arrow_down</span>
        </button>
        <div className="highlight-categories">
          <ul>
            {fixedCategories.map((fixCat) => (
              <li
                id={fixCat.name}
                key={uuid()}
                onClick={handleClickCategory}
              >
                {fixCat.name}
              </li>
            ))}
            <li>PEDIDOS</li>
          </ul>
        </div>
      </section>
      <MenuCategories
        displayMenuCategories={displayCategories}
        categories={categories}
      />
    </>
  );
}

export default MainNav;
