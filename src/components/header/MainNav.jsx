/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import requester from '../../helpers/requester';
import '../styles/MainNav.css';

function MainNav() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const requestCategories = async () => {
    const categoriesResponse = await requester('categories', 'get');
    const firstCategories = categoriesResponse.slice(0, 6);

    setCategories(firstCategories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  const handleClickCategory = (event) => {
    const { id } = event.target;
    navigate(`/category/${id}`);
    navigate(0);
  };

  return (
    <section className="main-nav">
      <div className="highlight-categories">
        <ul>
          {categories.map((fixCat) => (
            <li
              id={fixCat._id}
              key={uuid()}
              onClick={handleClickCategory}
            >
              {fixCat.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MainNav;
