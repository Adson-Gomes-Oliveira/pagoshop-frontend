import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brazilStates from '../helpers/brazilStates';
import requester from '../helpers/requester';
import './styles/Register.css';

function Register() {
  const [passwordVisible, setPasswordVisible] = useState('password');
  const [showError, setShowError] = useState(true);
  const [registerButtonDisable, setRegisterButtonDisable] = useState(true);
  const navigate = useNavigate();
  const [registerInputs, setRegisterInputs] = useState({
    email: '',
    password: '',
    name: '',
    cpf: '',
    phone: '',
    street: '',
    number: '',
    cep: '',
    moreInfo: '',
    city: '',
    state: 'AC',
  });

  const handleInputValidation = () => {
    const registerInputValues = Object.values(registerInputs);

    if (!registerInputValues.includes('')) return setRegisterButtonDisable(false);
    return setRegisterButtonDisable(true);
  };

  useEffect(() => {
    handleInputValidation();
  }, [registerInputs]);

  const handleRegisterInputChange = (event) => {
    const { id, value } = event.target;

    setRegisterInputs({
      ...registerInputs,
      [id]: value,
    });

    if (showError) setShowError(false);
  };

  const handleRegisterClick = async () => {
    const registerInputsToPayload = {
      name: registerInputs.name,
      email: registerInputs.email,
      password: registerInputs.password,
      cpf: registerInputs.cpf,
      phone: registerInputs.phone,
      address: {
        street: registerInputs.street,
        number: registerInputs.number,
        cep: registerInputs.cep,
        moreInfo: registerInputs.moreInfo,
        city: registerInputs.city,
        state: registerInputs.state,
      },
    };

    const createAccount = await requester('accounts', 'post', registerInputsToPayload);

    if (createAccount !== 201) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return setShowError(true);
    }

    return navigate('/login');
  };

  const handleShowPasswordClick = () => {
    if (passwordVisible === 'password') setPasswordVisible('text');
    if (passwordVisible === 'text') setPasswordVisible('password');
  };

  return (
    <section className="register">
      <span className="material-icons-outlined arrow-back">arrow_back_ios</span>
      <div className="register-header">
        <h2>Registre-se</h2>
        <div>
          <span>Já é um membro?</span>
          <a href="/login">Login</a>
        </div>
      </div>
      {showError && <span className="error-msg">* Algo deu errado, verifique as informações abaixo !</span>}
      <form className="register-body">
        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.email}
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
              type={passwordVisible}
              onChange={handleRegisterInputChange}
              value={registerInputs.password}
            />
            <button
              type="button"
              onClick={handleShowPasswordClick}
            >
              <span className="material-icons-outlined">visibility</span>
            </button>
          </div>
        </label>
        <label htmlFor="name">
          <span>Digite seu Nome</span>
          <input
            id="name"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.name}
          />
        </label>
        <label htmlFor="cpf">
          <span>CPF</span>
          <input
            id="cpf"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.cpf}
          />
        </label>
        <label htmlFor="phone">
          <span>Telefone</span>
          <input
            id="phone"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.phone}
          />
        </label>
        <span className="address-label">Informações de Endereço</span>
        <label htmlFor="street">
          <span>Rua</span>
          <input
            id="street"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.street}
          />
        </label>
        <label htmlFor="number">
          <span>Número</span>
          <input
            id="number"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.number}
          />
        </label>
        <label htmlFor="cep">
          <span>CEP</span>
          <input
            id="cep"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.cep}
          />
        </label>
        <label htmlFor="moreInfo">
          <span>Complemento</span>
          <input
            id="moreInfo"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.moreInfo}
          />
        </label>
        <label htmlFor="city">
          <span>Cidade</span>
          <input
            id="city"
            type="text"
            onChange={handleRegisterInputChange}
            value={registerInputs.city}
          />
        </label>
        <label htmlFor="state">
          <span>Estado</span>
          <select
            id="state"
            onClick={handleRegisterInputChange}
          >
            {brazilStates.contract.map((state, index) => (
              <option value={state}>
                {brazilStates.complete[index]}
              </option>
            ))}
          </select>
        </label>
      </form>
      <button
        type="button"
        disabled={registerButtonDisable}
        onClick={handleRegisterClick}
      >
        Registre-se
      </button>
    </section>
  );
}

export default Register;
