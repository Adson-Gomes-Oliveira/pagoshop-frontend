import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requester from '../helpers/requester';
import './styles/Login.css';

function Login() {
  const [loginInputs, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleChangeLogin = (event) => {
    const { id, value } = event.target;
    setLoginInput({
      ...loginInputs,
      [id]: value,
    });

    if (showError) setShowError(false);
  };

  const handleClickLogin = async () => {
    const response = await requester('authorization', 'login', {
      email: loginInputs.email,
      password: loginInputs.password,
    });

    if (response === 400) {
      setShowError(true);
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
      <span className="material-icons-outlined arrow-back">arrow_back_ios</span>
      <div className="login-header">
        <h2>Login</h2>
        <div>
          <span>Novo neste site?</span>
          <a href="/login">Registre-se</a>
        </div>
      </div>
      {showError && <span className="error-msg">* Algo deu errado, verifique as informações abaixo !</span>}
      <form className="login-body">
        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            type="text"
            onChange={handleChangeLogin}
            value={loginInputs.email}
          />
        </label>
        <label htmlFor="password" className="password-field">
          <span>Senha</span>
          <span className="password-help">
            Minimo de 8 caracteres, ao menos uma letra minuscula e maiuscula, e um numero.
          </span>
          <div>
            <input
              id="password"
              className="password-field-input"
              type="password"
              onChange={handleChangeLogin}
              value={loginInputs.password}
            />
          </div>
        </label>
      </form>
      <button
        type="button"
        onClick={handleClickLogin}
      >
        Fazer login
      </button>
    </section>
  );
}

export default Login;
