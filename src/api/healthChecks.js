import axios from 'axios';

const checkGateway = async () => {
  const requestString = 'https://trooper-gateway.onrender.com/health-check';
  const response = await axios.get(requestString);

  return response.data;
};

const checkAccount = async () => {
  const requestString = 'https://trooper-account.onrender.com/health-check';
  const response = await axios.get(requestString);

  return response.data;
};
const checkProduct = async () => {
  const requestString = 'https://trooper-product.onrender.com/health-check';
  const response = await axios.get(requestString);

  return response.data;
};

const checkOrder = async () => {
  const requestString = 'https://trooper-order.onrender.com/health-check';
  const response = await axios.get(requestString);

  return response.data;
};

const checkPayment = async () => {
  const requestString = 'https://trooper-payment.onrender.com/health-check';
  const response = await axios.get(requestString);

  return response.data;
};

const allMethods = {
  checkGateway,
  checkAccount,
  checkProduct,
  checkOrder,
  checkPayment,
};

export default allMethods;
