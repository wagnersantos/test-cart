import axios from 'axios';

export const onResponseError = error => {
  const errorHasResponse = error && error.response;

  if (errorHasResponse) {
    console.log(error.response.data.message);
  }

  if (axios.isCancel(error)) {
    console.log(error);
  }

  return Promise.reject(error);
};

export const validateRequest = config => {
  return config;
};
