import axios from 'axios';

const getOneOrder = async ({ id, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_ORDERS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_ORDERS_PORT}/${process.env.REACT_APP_ORDERS_BASEURL}/${id}`;
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

const allMethods = {
  createOrder,
  getOneOrder,
};

export default allMethods;
