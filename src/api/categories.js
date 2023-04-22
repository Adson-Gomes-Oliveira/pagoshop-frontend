import axios from 'axios';

const getAllCategories = async () => {
  const requestStringOne = `${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `/${process.env.REACT_APP_CATEGORY_BASEURL}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const categories = response.data;
  return categories;
};

const getOneCategory = async ({ id }) => {
  const requestStringOne = `${process.env.REACT_APP_GATEWAY_HOST || '127.0.0.1'}`;
  const requestStringTwo = `/${process.env.REACT_APP_CATEGORY_BASEURL}/${id}`;
  const requestString = requestStringOne + requestStringTwo;

  const response = await axios.get(requestString);
  const categories = response.data;
  return categories;
};

const allMethods = {
  getAllCategories,
  getOneCategory,
};

export default allMethods;
