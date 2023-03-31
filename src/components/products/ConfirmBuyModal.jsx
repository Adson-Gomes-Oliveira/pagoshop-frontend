import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ConfirmBuyModal.css';

function ConfirmBuyModal({ toggleOff }) {
  const handleClickClose = () => {
    toggleOff(false);
  };

  return (
    <div className="confirm-buy-modal">
      <div className="modal">
        <h2>Produto adicionado ao carrinho !</h2>
        <button
          type="button"
          onClick={handleClickClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

ConfirmBuyModal.propTypes = {
  toggleOff: PropTypes.func,
}.isRequired;

export default ConfirmBuyModal;
