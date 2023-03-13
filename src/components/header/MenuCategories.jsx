import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import requester from '../../helpers/requester';
import '../styles/MainNav.css';

function MenuCategories({ fixedCategories, displayMenuCategories }) {
  const [categories, setCategories] = useState([]);

  const requestCategories = async () => {
    const categoriesResponse = await requester('categories', 'get');

    const categoriesFiltered = categoriesResponse.filter((cat) => !fixedCategories.includes(
      cat.name,
    ));
    const activeCategories = categoriesFiltered.filter((cat) => cat.status === 'active');

    setCategories(activeCategories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <div className="menu-categories" style={{ display: displayMenuCategories }}>
      {categories.map((cat) => {
        const { name } = cat;
        return (
          <span key={uuid()}>{`• ${name}`}</span>
        );
      })}
    </div>
  );
}

MenuCategories.propTypes = {
  fixedCategories: PropTypes.object,
  displayMenuCategories: PropTypes.string,
}.isRequired;

export default MenuCategories;
