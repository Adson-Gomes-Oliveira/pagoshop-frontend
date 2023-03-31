import axios from 'axios';

const login = async (credentials) => {
  const requestStringOne = `http://${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_GATEWAY_PORT}/${process.env.REACT_APP_LOGIN_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  try {
    const response = await axios.post(requestString, credentials);
    return response;
  } catch (err) {
    return err.status;
  }
};

export default login;
