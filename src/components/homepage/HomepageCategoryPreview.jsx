import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import requester from '../../helpers/requester';
import './styles/HomepageCategoryPreview.css';

function HomepageCategoryPreview() {
  const [categories, setCategories] = useState([]);

  const requestAllCategories = async () => {
    const response = await requester('categories', 'get');

    const slicingCategories = response.slice(0, 3);

    setCategories(slicingCategories);
  };

  useEffect(() => {
    requestAllCategories();
  }, []);

  return (
    <section className="homepage-category-preview">
      <div className="preview-header">
        <h2>Comprar por categoria</h2>
        <button type="button">Loja</button>
      </div>
      <div className="preview-categories">
        {categories && categories.map((cat) => {
          const { name, thumbnail } = cat;
          return (
            <div className="category-showed" key={uuid()}>
              <div className="image-div" style={{ backgroundImage: `url(${thumbnail})` }} />
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomepageCategoryPreview;
