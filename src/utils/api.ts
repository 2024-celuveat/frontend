/* eslint-disable no-param-reassign */
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  ({ data }) => data,
  error => {
    if (error.response.status === 401) {
      return null;
    }
    return Promise.reject(error);
  },
);
