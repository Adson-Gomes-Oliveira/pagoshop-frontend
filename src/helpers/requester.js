import category from '../api/categories';
import product from '../api/products';
import login from '../api/login';

const categories = {
  get: category.getAllCategories,
};

const products = {
  get: product.getAllProducts,
  getOne: product.getOneProduct,
};

const authorization = {
  login,
};

const endpoints = {
  categories,
  products,
  authorization,
};

const requester = async (endpoint, method, requestParams = {}) => {
  const response = await endpoints[endpoint][method](requestParams);
  return response;
};

export default requester;
