import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PagoShopContext from './PagoShopContext';
import requester from '../helpers/requester';

function PagoShopProvider({ children }) {
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const requestProducts = async () => {
    const productsResponse = await requester('products', 'get');
    return productsResponse;
  };

  const value = useMemo(() => ({
    requestProducts,
    query,
    setQuery,
    filterCategory,
    setFilterCategory,
  }), [query, filterCategory]);

  return (
    <PagoShopContext.Provider value={value}>
      {children}
    </PagoShopContext.Provider>
  );
}

PagoShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PagoShopProvider;
