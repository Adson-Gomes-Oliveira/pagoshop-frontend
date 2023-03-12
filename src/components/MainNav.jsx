import React from 'react';
import './styles/MainNav.css';

function MainNav() {
  return (
    <section className="main-nav">
      <div className="all-categories">
        <select id="categories">
          <option value="all-categories">
            Todas as Categorias
          </option>
        </select>
      </div>
      <div className="highlight-categories">
        <ul>
          <li>ELETRODOMÉSTICO</li>
          <li>INFORMÁTICA</li>
          <li>SMARTPHONE</li>
          <li>MÓVEIS</li>
          <li>CAMA/MESA/BANHO</li>
          <li>PEDIDOS</li>
        </ul>
      </div>
    </section>
  );
}

export default MainNav;
