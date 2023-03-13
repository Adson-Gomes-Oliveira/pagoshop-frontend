import axios from 'axios';

const getAllProducts = async () => {
  const requestStringOne = `http://${process.env.REACT_APP_PRODUCTS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_PRODUCTS_PORT}/${process.env.REACT_APP_PRODUCTS_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const products = response.data;
  return products;
};

// const getOneProduct = async () => {
//   const request
// };

const allMethods = {
  getAllProducts,
};

export default allMethods;
