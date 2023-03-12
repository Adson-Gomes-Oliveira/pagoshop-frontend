import React from 'react';
import './styles/MainNav.css';

function MainNav() {
  return (
    <section className="main-nav">
      <div className="all-categories">
        <span>Todas as Categorias</span>
        <span className="material-icons-outlined">keyboard_double_arrow_down</span>
      </div>
      <div className="highlight-categories">
        <ul>
          <li>ELETRODOMÉSTICOS</li>
          <li>INFORMÁTICA</li>
          <li>SMARTPHONES</li>
          <li>MÓVEIS</li>
          <li>CAMA/MESA/BANHO</li>
          <li>PEDIDOS</li>
        </ul>
      </div>
    </section>
  );
}

export default MainNav;
