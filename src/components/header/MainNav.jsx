/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './styles/MainNav.css';
import TrooperContext from '../../context/TrooperContext';

function MainNav() {
  const { categories } = useContext(TrooperContext);
  const navigate = useNavigate();

  const handleClickCategory = (event) => {
    const { id } = event.target;
    navigate(`/category/${id}`);
    navigate(0);
  };

  return (
    <section className="main-nav">
      <div className="highlight-categories">
        <ul>
          {categories && categories.map((fixCat) => (
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
