import category from '../api/categories';
import product from '../api/products';
import login from '../api/login';
import logout from '../api/logout';
import order from '../api/orders';
import account from '../api/accounts';

const categories = {
  get: category.getAllCategories,
};

const accounts = {
  getOne: account.getUserData,
};

const products = {
  get: product.getAllProducts,
  getOne: product.getOneProduct,
};

const authorization = {
  login,
  logout,
};

const orders = {
  getOne: order.getOneOrder,
  post: order.createOrder,
};

const endpoints = {
  categories,
  products,
  authorization,
  orders,
  accounts,
};

const requester = async (endpoint, method, requestParams = {}) => {
  const response = await endpoints[endpoint][method](requestParams);
  return response;
};

export default requester;
