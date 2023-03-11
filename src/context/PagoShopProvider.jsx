import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import PagoShopContext from './PagoShopContext';

function PagoShopProvider({ children }) {
  return (
    <PagoShopContext.Provider value={useMemo(() => {})}>
      {children}
    </PagoShopContext.Provider>
  );
}

PagoShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PagoShopProvider;
