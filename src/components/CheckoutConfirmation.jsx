import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import TrooperContext from '../context/TrooperContext';
import './styles/CheckoutConfirmation.css';

function CheckoutConfirmation({ setShowCheckoutConfirmationModal }) {
  const { setShowCheckoutModal, setCart } = useContext(TrooperContext);
  const navigate = useNavigate();

  const handleCloseBuyProcessClick = () => {
    setShowCheckoutModal(false);
    setShowCheckoutConfirmationModal(false);
    setCart([]);
    navigate('/');
  };

  return (
    <section className="confirmation-modal">
      <div className="modal">
        <h2>🥳 Compra Finalizada 🥳</h2>
        <span>
          {
          `Parabens! Sua compra foi finalizada e estamos preparando para envia-la,
            a nota fiscal será enviada no email cadastrado nos próximos minutos,
            obrigado pela preferência.`
          }
        </span>
        <span>Veirifque sua caixa de entrada e spam !</span>
        <button
          type="button"
          onClick={handleCloseBuyProcessClick}
        >
          Voltar ao Inicio
        </button>
      </div>
    </section>
  );
}

CheckoutConfirmation.propTypes = {
  setShowCheckoutConfirmationModal: PropTypes.func.isRequired,
};

export default CheckoutConfirmation;
