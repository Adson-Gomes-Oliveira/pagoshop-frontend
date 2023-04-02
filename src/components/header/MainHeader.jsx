/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from './MainNav';
import TrooperLogo from '../../assets/svg/trooper-logo.svg';
import PagoShopContext from '../../context/PagoShopContext';
import requester from '../../helpers/requester';
import '../styles/MainHeader.css';

function MainHeader() {
  const [searchInput, setSearchInput] = useState('');
  const [username, setUsername] = useState(null);
  const { setQuery, cart } = useContext(PagoShopContext);
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

    if (response.data === 'jwt expired') {
      localStorage.clear();
      navigate(0);
    }

    if (response.status === 204) {
      localStorage.clear();
      navigate(0);
    }
  };

  const handleClickCart = async () => navigate('/shopping-cart');

  return (
    <section className="main-header">
      <div className="header-first-section">
        <div className="ad-header-first-section">
          <span>Frete grátis em compras acima de R$ 150,00 para todo o Brasil !</span>
          <span>Consulte o Regulamento *</span>
        </div>
        <div className="content-header-first-section">
          <form className="header-search-bar">
            <button
              type="button"
              onClick={handleSearchButton}
            >
              <span className="material-icons-outlined">search</span>
            </button>
            <input
              type="text"
              id="searchBar"
              onChange={handleSearchInputChange}
              onKeyUp={handleEnter}
              value={searchInput}
              placeholder="Buscar"
            />
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
              onClick={handleClickCart}
            >
              <span className="material-icons-outlined">shopping_cart</span>
              <div className="cart-counter">{cart.length}</div>
            </button>
          </div>
        </div>
      </div>

      <div className="header-divisor" />

      <div className="header-second-section">
        <div className="header-logo">
          <img src={TrooperLogo} alt="pago-shop-logo" />
          <h1>Trooper</h1>
        </div>
        <MainNav />
      </div>
    </section>
  );
}

export default MainHeader;
