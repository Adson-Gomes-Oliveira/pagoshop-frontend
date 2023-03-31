import axios from 'axios';

const getAllCategories = async () => {
  const requestStringOne = `http://${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `:${process.env.REACT_APP_GATEWAY_PORT}/${process.env.REACT_APP_CATEGORY_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const categories = response.data;
  return categories;
};

const allMethods = {
  getAllCategories,
};

export default allMethods;
