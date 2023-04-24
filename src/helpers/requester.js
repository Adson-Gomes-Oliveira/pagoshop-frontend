import category from '../api/categories';
import product from '../api/products';
import login from '../api/login';
import logout from '../api/logout';
import order from '../api/orders';
import account from '../api/accounts';
import payment from '../api/payments';
import healthChecks from '../api/healthChecks';

const health = {
  gateway: healthChecks.checkGateway,
  account: healthChecks.checkAccount,
  product: healthChecks.checkProduct,
  order: healthChecks.checkOrder,
  payment: healthChecks.checkPayment,
};

const categories = {
  get: category.getAllCategories,
  getOne: category.getOneCategory,
};

const accounts = {
  getOne: account.getUserData,
  post: account.postUser,
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
  health,
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
