import React from 'react';
import PagoShopLogo from '../assets/svg/pago-shop-logo-white.svg';

function MainHeader() {
  return (
    <section className="main-header">
      <div className="header-logo">
        <img src={PagoShopLogo} alt="pago-shop-logo" />
      </div>
      <form className="header-search-bar">
        <label htmlFor="search-bar">
          <input
            type="text"
            id="search-bar"
            // onChange={}
            // value={}
          />
        </label>
        <button
          type="button"
          // onClick={}
        >
          <span>Pesquisar</span>
        </button>
      </form>
      <div className="login">
        <span>Entre ou Cadastre-se</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>
      <div className="shopping-cart">
        <button
          type="button"
          // onClick={}
        >
          <span className="material-icons-outlined">shopping_cart</span>
        </button>
      </div>
    </section>
  );
}

export default MainHeader;
