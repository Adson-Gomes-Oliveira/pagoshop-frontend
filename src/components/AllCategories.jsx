import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import requester from '../helpers/requester';
import './styles/MainNav.css';

function AllCategories({ fixedCategories, displayAllCategories }) {
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
    <div className="all-extra-categories" style={{ display: displayAllCategories }}>
      {categories.map((cat) => {
        const { name } = cat;
        return (
          <span key={uuid()}>{`• ${name}`}</span>
        );
      })}
    </div>
  );
}

AllCategories.propTypes = {
  fixedCategories: PropTypes.object,
}.isRequired;

export default AllCategories;
