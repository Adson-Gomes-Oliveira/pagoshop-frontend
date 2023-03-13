import category from '../api/categories';

const categories = {
  get: category.getAllCategories,
};

const endpoints = {
  categories,
};

const requester = async (endpoint, method, requestParams = {}) => {
  const response = await endpoints[endpoint][method](requestParams);
  return response;
};

export default requester;
