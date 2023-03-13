import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import AllCategories from './AllCategories';
import './styles/MainNav.css';

function MainNav() {
  const [fixedCategories] = useState([
    'ELETRODOMÉSTICOS',
    'INFORMÁTICA',
    'SMARTPHONES',
    'MÓVEIS',
    'CAMA/MESA/BANHO',
  ]);
  const [displayCategories, setDisplayCategories] = useState('none');

  const toggleAllCategories = () => {
    const newCategoriesDisplayStatus = displayCategories === 'none' ? 'flex' : 'none';
    setDisplayCategories(newCategoriesDisplayStatus);
  };

  return (
    <>
      <section className="main-nav">
        <button
          type="button"
          className="all-categories"
          onClick={toggleAllCategories}
        >
          <span>Todas as Categorias</span>
          <span className="material-icons-outlined">keyboard_double_arrow_down</span>
        </button>
        <div className="highlight-categories">
          <ul>
            {fixedCategories.map((fixCat) => <li key={uuid()}>{fixCat}</li>)}
            <li>PEDIDOS</li>
          </ul>
        </div>
      </section>
      <AllCategories fixedCategories={fixedCategories} displayAllCategories={displayCategories} />
    </>
  );
}

export default MainNav;
