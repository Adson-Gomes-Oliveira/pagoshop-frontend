import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PagoShopContext from './PagoShopContext';
import requester from '../helpers/requester';

function PagoShopProvider({ children }) {
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [orderId, setOrderId] = useState('');
  const [cart, setCart] = useState([]);

  const requestProducts = async () => {
    const productsResponse = await requester('products', 'get');
    return productsResponse;
  };

  useEffect(() => {
    const recoverPreviousCart = localStorage.getItem('shopping-cart');
    if (cart.length === 0 && recoverPreviousCart) {
      setCart(JSON.parse(recoverPreviousCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

  const value = useMemo(() => ({
    requestProducts,
    query,
    setQuery,
    filterCategory,
    setFilterCategory,
    cart,
    setCart,
    orderId,
    setOrderId,
  }), [cart, query, filterCategory, orderId]);

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
