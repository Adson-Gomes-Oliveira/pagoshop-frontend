import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>HOME</h1>} />
      <Route path='/account/:id' element={<h1>ACCOUNT</h1>} />
      <Route path='/products' element={<h1>PRODUCTS</h1>} />
      <Route path='/products/:id' element={<h1>SPECIFIC_PRODUCT</h1>} />
      <Route path='/order/:id' element={<h1>ORDER</h1>} />
      <Route path='/checkout' element={<h1>CHECKOUT</h1>} />
    </Routes>
  );
}

export default App;
