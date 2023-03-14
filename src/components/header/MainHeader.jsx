/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from './MainNav';
import MainAd from './MainAd';
import PagoShopLogo from '../../assets/svg/pago-shop-logo-white.svg';
import PagoShopContext from '../../context/PagoShopContext';
import requester from '../../helpers/requester';
import '../styles/MainHeader.css';

function MainHeader() {
  const [searchInput, setSearchInput] = useState('');
  const [username, setUsername] = useState(null);
  const { setQuery } = useContext(PagoShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const recoverUserData = localStorage.getItem('user');
    if (recoverUserData) {
      const parseUserData = JSON.parse(recoverUserData);
      return setUsername(parseUserData.name);
    }

    return setUsername(null);
  });

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

  const handleClickLogout = async () => {
    const recoverToken = localStorage.getItem('token');
    const response = await requester('authorization', 'logout', recoverToken);

    if (response === 204) {
      localStorage.clear();
      navigate('/');
    }
  };

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

        {username === null ? (
          <div className="login" onClick={handleRedirect}>
            <span>Entre ou Cadastre-se</span>
            <span className="material-icons-outlined">account_circle</span>
          </div>
        ) : (
          <div className="logout">
            <span>{username}</span>
            <button
              type="button"
              onClick={handleClickLogout}
            >
              <span>Sair</span>
              <span className="material-icons-outlined">logout</span>
            </button>
          </div>
        )}

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
