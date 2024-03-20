import axios from 'axios';

export const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export const apiResponseParser = (response) => {
  if (![200, 201, 204].includes(response.status)) {
    return Promise.reject(response.statusText);
  }
  return response.data;
};
