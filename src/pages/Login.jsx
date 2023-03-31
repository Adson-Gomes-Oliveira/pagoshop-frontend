import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagoShopLogoGreen from '../assets/svg/pago-shop-logo-green.svg';
import requester from '../helpers/requester';
import './styles/Login.css';

function Login() {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [showLoginError, setShowLoginError] = useState('none');
  const navigate = useNavigate();

  const handleChangeLogin = (event) => {
    const { id, value } = event.target;
    setLoginInput({
      ...loginInput,
      [id]: value,
    });
  };

  const handleClickLogin = async () => {
    const response = await requester('authorization', 'login', {
      email: loginInput.email,
      password: loginInput.password,
    });

    if (response === 400) {
      setShowLoginError('block');
      return;
    }

    const userData = response.data;
    const userToken = response.headers.authorization;

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);

    navigate('/');
  };

  return (
    <section className="login-section">
      <div className="modal-login">
        <img src={PagoShopLogoGreen} alt="PagoShop Logo" />
        <span>Faça login para poder acompanhar pedidos, fazer compras e muito mais !</span>
        <form>
          <label htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email"
              onChange={handleChangeLogin}
              value={loginInput.email}
            />
          </label>
          <label htmlFor="password">
            <span>Senha</span>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={handleChangeLogin}
              value={loginInput.password}
            />
          </label>
        </form>

        <span
          className="login-error-message"
          style={{ display: showLoginError }}
        >
          Email ou Senha invalida ! *
        </span>

        <div className="login-buttons">
          <button
            type="button"
          >
            CADASTRO
          </button>
          <button
            type="button"
            onClick={handleClickLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
