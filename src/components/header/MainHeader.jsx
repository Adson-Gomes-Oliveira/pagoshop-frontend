/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from './MainNav';
import MainAd from './MainAd';
import PagoShopLogo from '../../assets/svg/pago-shop-logo-white.svg';
import PagoShopContext from '../../context/PagoShopContext';
import '../styles/MainHeader.css';

function MainHeader() {
  const [searchInput, setSearchInput] = useState('');
  const { setQuery } = useContext(PagoShopContext);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleSearchButton = () => setQuery(searchInput);

  const handleEnter = (event) => {
    const { key } = event;
    if (key === 'Enter') setQuery(searchInput);
  };

  const handleRedirect = () => navigate('/login');

  return (
    <>
      <MainAd />
      <section className="main-header">
        <div className="header-logo">
          <a href="/"><img src={PagoShopLogo} alt="pago-shop-logo" /></a>
        </div>
        <form className="header-search-bar">
          <input
            type="text"
            id="searchBar"
            onChange={handleSearchInputChange}
            onKeyUp={handleEnter}
            value={searchInput}
          />
          <button
            type="button"
            onClick={handleSearchButton}
          >
            <span className="material-icons-outlined">search</span>
          </button>
        </form>
        <div className="login" onClick={handleRedirect}>
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
      <MainNav />
    </>
  );
}

export default MainHeader;
