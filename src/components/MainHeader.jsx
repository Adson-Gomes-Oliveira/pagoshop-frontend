import React from 'react';
import PagoShopLogo from '../assets/svg/pago-shop-logo-white.svg';
import './styles/MainHeader.css';

function MainHeader() {
  return (
    <section className="main-header">
      <div className="header-logo">
        <img src={PagoShopLogo} alt="pago-shop-logo" />
      </div>
      <form className="header-search-bar">
        <input
          type="text"
          id="search-bar"
          // onChange={}
          // value={}
        />
        <button
          type="button"
          // onClick={}
        >
          <span className="material-icons-outlined">search</span>
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
