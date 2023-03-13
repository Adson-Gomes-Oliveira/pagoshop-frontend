/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import PagoShopContext from '../../context/PagoShopContext';
import '../styles/MainNav.css';

function MenuCategories({ displayMenuCategories, categories }) {
  const { setFilterCategory } = useContext(PagoShopContext);

  const handleClickCategory = (event) => {
    const { id } = event.target;
    setFilterCategory(id);
  };

  return (
    <div className="menu-categories" style={{ display: displayMenuCategories }}>
      {categories.map((cat) => {
        const { name } = cat;
        return (
          <span id={name} key={uuid()} onClick={handleClickCategory}>{`• ${name}`}</span>
        );
      })}
    </div>
  );
}

MenuCategories.propTypes = {
  fixedCategories: PropTypes.array,
  displayMenuCategories: PropTypes.string,
  categories: PropTypes.array,
}.isRequired;

export default MenuCategories;
