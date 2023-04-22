import axios from 'axios';

const getAllProducts = async () => {
  const requestStringOne = `${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `/${process.env.REACT_APP_PRODUCT_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const products = response.data;
  return products;
};

const getOneProduct = async (id) => {
  const requestStringOne = `${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `/${process.env.REACT_APP_PRODUCT_BASEURL}/${id}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const products = response.data;
  return products;
};

const allMethods = {
  getAllProducts,
  getOneProduct,
};

export default allMethods;
