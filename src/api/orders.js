import axios from 'axios';

const getOneOrder = async ({ id, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_GATEWAY_PORT}/${process.env.REACT_APP_ORDER_BASEURL}/${id}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString, {
    headers: { Authorization: token },
  });
  const order = response.data;
  return order;
};

const createOrder = async ({ orderInfos, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_ORDERS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_ORDERS_PORT}/${process.env.REACT_APP_ORDERS_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.post(requestString, orderInfos, {
    headers: { Authorization: token },
  });
  const order = response.data;
  return order;
};

const confirmOrder = async ({ paymentInfos, id, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_ORDERS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_ORDERS_PORT}/${process.env.REACT_APP_ORDERS_BASEURL}`;
  const requestStringThree = `${process.env.REACT_APP_ORDERS_CONFIRM_RESOURCE}/${id}`;
  const requestString = requestStringOne + requestStringTwo + requestStringThree;

  const response = await axios.post(requestString, paymentInfos, {
    headers: { Authorization: token },
  });
  const invoice = response.data;
  return invoice;
};

const allMethods = {
  createOrder,
  getOneOrder,
  confirmOrder,
};

export default allMethods;
