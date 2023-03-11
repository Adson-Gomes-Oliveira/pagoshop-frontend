import PagoShopContext from './PagoShopContext';
import PropTypes from 'prop-types';

function PagoShopProvider({ children }) {
  return (
    <PagoShopContext.Provider value={{

    }}>
      {children}
    </PagoShopContext.Provider>
  )
}

PagoShopProvider.propTypes = {
  children: PropTypes.node,
};

export default PagoShopProvider;
