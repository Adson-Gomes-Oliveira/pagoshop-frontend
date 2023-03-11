import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/account/register" element={<h1>ACCOUNT_REGISTER</h1>} />
      <Route path="/account/:id" element={<h1>ACCOUNT</h1>} />
      <Route path="/products" element={<h1>PRODUCTS</h1>} />
      <Route path="/products/:id" element={<h1>SPECIFIC_PRODUCT</h1>} />
      <Route path="/order/:id" element={<h1>ORDER</h1>} />
      <Route path="/checkout" element={<h1>CHECKOUT</h1>} />
      <Route path="*" element={<h1>NOTHING_HERE</h1>} />
    </Routes>
  );
}

export default App;
