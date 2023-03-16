import category from '../api/categories';
import product from '../api/products';
import login from '../api/login';
import logout from '../api/logout';
import order from '../api/orders';
import account from '../api/accounts';
import payment from '../api/payments';

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

const payments = {
  getOne: payment.getOnePayment,
};

const authorization = {
  login,
  logout,
};

const orders = {
  getOne: order.getOneOrder,
  post: order.createOrder,
  postConfirmOrder: order.confirmOrder,
};

const endpoints = {
  categories,
  products,
  authorization,
  orders,
  accounts,
  payments,
};

const requester = async (endpoint, method, requestParams = {}) => {
  const response = await endpoints[endpoint][method](requestParams);
  return response;
};

export default requester;
