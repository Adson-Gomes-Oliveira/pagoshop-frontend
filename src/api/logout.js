import axios from 'axios';

const logout = async (token) => {
  const requestStringOne = `http://${process.env.REACT_APP_LOGOUT_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_LOGOUT_PORT}/${process.env.REACT_APP_LOGOUT_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  try {
    const response = await axios.get(requestString, {
      headers: { Authorization: token },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export default logout;
