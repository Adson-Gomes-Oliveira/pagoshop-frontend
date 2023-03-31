import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/account/:id" element={<h1>ACCOUNT</h1>} />
        <Route path="/orders" element={<h1>ORDERS</h1>} />
        <Route path="/order/:id" element={<h1>ORDER</h1>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>ACCOUNT_REGISTER</h1>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="*" element={<h1>NOTHING_HERE</h1>} />
    </Routes>
  );
}

export default App;
