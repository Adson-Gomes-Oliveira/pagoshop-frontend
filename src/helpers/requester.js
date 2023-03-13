import category from '../api/categories';
import product from '../api/products';

const categories = {
  get: category.getAllCategories,
};

const products = {
  get: product.getAllProducts,
};

const endpoints = {
  categories,
  products,
};

const requester = async (endpoint, method, requestParams = {}) => {
  const response = await endpoints[endpoint][method](requestParams);
  return response;
};

export default requester;
