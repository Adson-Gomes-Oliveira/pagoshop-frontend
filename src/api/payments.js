import axios from 'axios';

const getOnePayment = async ({ id, token }) => {
  const requestStringOne = `http://${process.env.REACT_APP_PAYMENTS_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_PAYMENTS_PORT}/${process.env.REACT_APP_PAYMENTS_BASEURL}/${id}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString, {
    headers: { Authorization: token },
  });
  const order = response.data;
  return order;
};

const allMethods = {
  getOnePayment,
};

export default allMethods;
